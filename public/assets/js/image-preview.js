/**
* @Author: PALARD Nicolas <nclsp>
* @Date:   2019-04-23T10:13:48+02:00
* @Email:  palard@rea.lity.tech
* @Project: Natar.io
* @Last modified by:   nclsp
* @Last modified time: 2019-04-23T10:14:37+02:00
* @Copyright: RealityTech 2018-2019H
*/

/**
* TODO: Fix huge ressource problem (100% CPU usage)
*/

let liveSwitch, keyInput, trackerSelect, latencyInput;
let live, key, latency = 300, imageInterval, markerInterval;
let iw = "", ih = "", ic = "";
let img = null, imageData = [], markers = [];
let imageReady = false;

$(document).ready( () => {
  liveSwitch = new Switchery(document.getElementById('live-update'));
  keyInput = document.getElementById('camera-key')
  latencyInput = document.getElementById('latency-input');
  trackerSelect = document.getElementById("tracker-select");

  live = liveSwitch.isChecked();

  key = keyInput.value;
  onKeyUpdated();

  $(latencyInput).prop("disabled", !liveSwitch.isChecked());
  latency = latencyInput.value == "" ? latencyInput.defaultValue : latencyInput.value;

  function iconFormat(icon) {
    var originalOption = icon.element;
    if (!icon.id) { return icon.text; }
    var $icon = '<i class="icon-' + $(icon.element).data('icon') + '"></i>' + icon.text;

    return $icon;
  }

  // Initialize with options
  $('.select-icons').select2({
    templateResult: iconFormat,
    minimumResultsForSearch: Infinity,
    templateSelection: iconFormat,
    escapeMarkup: function(m) { return m; }
  });

});


// Actions
start = () => {
  if (!live) {
    getImage();
    getMarkers();
  }
  else {
    imageInterval = setInterval( () => {
      getImage();
    }, latency);
    markerInterval = setInterval( () => {
      getMarkers();
    }, latency);
  }
}

stop = () => {
  clearInterval(imageInterval);
  clearInterval(markerInterval);
}

restart = () => {
  stop();
  start();
}

// Updates
toggleLiveUpdate = () => {
  live = liveSwitch.isChecked();
  $(latencyInput).prop("disabled", !live);
  if (live) {
    start();
  }
  else {
    stop();
  }
}

onLatencyUpdated = () => {
  latency = latencyInput.value;
  restart();
}

let imageDataUpdated = true;
onKeyUpdated = () => {
  key = keyInput.value;
  iDataUpdated = false;
  axios.get(`/redis/get/${key}:width`)
  .then(response => {
    iw = response.data;
    axios.get(`/redis/get/${key}:height`).
    then(response => {
      ih = response.data;
      axios.get(`/redis/get/${key}:channels`)
      .then(response => {
        ic = response.data;
        imageDataUpdated = true;
      });
    });
  });
}

// Core
getImage = () => {
  if (!imageDataUpdated || iw == "" || ih == "" || ic == "") { return; }
  axios.get(`/redis/get/${key}?type=image`)
  .then(response => {
    let base64 = response.data;
    let rawData = window.atob(base64);
    if (imageData == null || imageData.length != rawData.length) {
      imageData = new Uint8Array(new ArrayBuffer(rawData.length));
    }
    for(i = 0; i < rawData.length; i++) {
      imageData[i] = rawData.charCodeAt(i);
    }
    updateImage(imageData);
  });
}

getMarkers = () => {
  tracker = trackerSelect.value.toLowerCase();
  if (tracker == "-1") { return; }
  axios.get(`/redis/get/${key}:${tracker}`)
  .then(response => {
    markers = [];
    let obj = response.data;
    for (let i = 0 ; i < obj.markers.length ; ++i) {
      markers.push(obj.markers[i]);
    }
  })
}

updateImage = () => {
  img = createImage(iw, ih, RGB);
  img.loadPixels();

  k = 0, srcIdx = 0;
  for (idx = 0; idx < img.pixels.length; idx++) {
    img.pixels[idx] = imageData[srcIdx++];
    if (ic == 3 && ++k == 3) {
      img.pixels[++idx] = 255;
      k = 0;
    }
  }
  img.updatePixels();
  imageReady = true;
  canvas.width = iw;
  canvas.height = ih;
}


// Processing core

setup = () => {
  let canvas = createCanvas(640, 480);
  canvas.parent('camera-preview');
  pClear();
}

settings = () => { }

draw = () => {
  if (!imageReady) return;
  pClear();
  drawImage();
  drawMarkers();
}

pClear = () => {
  clear();
  background(0);
}

drawImage = () => {
  if (img == null) { return; }
  img.resize(iw, ih);
  image(img, 0, 0, iw, ih);
  imageReady = false;
}

drawMarkers = () => {
  for (let i = 0 ; i < markers.length ; ++i) {
    let marker = markers[i];
    let centerX = marker.center[0];
    let centerY = marker.center[1];

    push();
    fill(0, 255, 0);
    textSize(12);
    text("" + marker.id, centerX, centerY);
    for (let c = 0 ; c < marker.corners.length; c+=2) {
      fill(255, 0, 0);
      noStroke();
      ellipse(marker.corners[c], marker.corners[c+1], 3, 3);
      if (c != 0) {
        stroke(255, 0, 0);
        strokeWeight(2);
        line(marker.corners[c-2], marker.corners[c-1], marker.corners[c], marker.corners[c+1])
      }
    }
    line(marker.corners[0], marker.corners[1], marker.corners[marker.corners.length-2], marker.corners[marker.corners.length-1])
    pop();
  }
}
