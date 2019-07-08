import { Controller } from "stimulus"

export default class extends Controller {

  static get targets() {
    return ['list', 'calibinput', 'calibkey', 'calibinputicon'];
  }

  connect() {
    console.log("[DIST] File view controller connected");
    this.calibinputTarget.value = "";
    this.reload();
    setInterval(() => {
      this.reload();
    }, 60000)
  }

  async reload ()  {
    let calibrationFilesList = await this.getCalibrationsFilesList();
    let markerboardFilesList = await this.getMarkerboardsFilesList();

    if (calibrationFilesList.data) {
      this.listTarget.innerHTML = calibrationFilesList.data;
    }
    if (markerboardFilesList.data) {
      this.listTarget.innerHTML += markerboardFilesList.data;
    }
  }

  fileClicked(event) {
    let file = event.currentTarget.dataset.file;
    this.type = event.currentTarget.dataset.type;
    this.calibinputTarget.value = file;
    this.calibinputTarget.classList.add('text-success');
    this.calibinputiconTarget.classList.add('icon-checkmark-circle');

  }

  loadFile(event) {
    let cFile = this.calibinputTarget.value;
    let cKey = this.calibkeyTarget.value;
    if (cFile == "" || cKey == "" || this.type == "undefined") {
      return;
    }

    // TODO: Do this server side
    let optType = "";
    let typeFolder = "calibration"
    switch(this.type) {
      case "calibration":
        optType = "-pd";
        break;
      case "projector":
        optType = "-pr -pd";
        break;
      case "pose":
        optType = "-m"; //TODO: -i only if inverted checkbox checked
        if (false)
          optType += " -i";
        break;
      case "markerboard":
        typeFolder = "markerboards"
        optType = "-mb";
        break;
      default:
        optType = "any"
        break;
    }

    axios.get(`/service/load_configuration?file=data/${typeFolder}/${cFile}&output=${cKey}&type=${optType}`)
    .then( (response) => {
      successNotif('Calibration loaded', `<strong>Succeed with message</strong>: <br/> ${response.data}`);
    })
    .catch( (error) => {
      errorNotif('Calibration not loaded', `Sorry ! <br/> We are unable to load the calibration file <strong>${cFile}</strong>. <br/> ${error}`);
    });
  }

  async getMarkerboardsFilesList () {
    try {
      return await axios.get('/system/files/markerboards/list');
    } catch (error) {
      console.log(error);
    }
  }

  async getCalibrationsFilesList () {
    try {
      return await axios.get('/system/files/calibrations/list');
    } catch (error) {
      console.log(error);
    }
  }
}
