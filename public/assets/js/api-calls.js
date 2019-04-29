let getStatusLabel, getResponseBody;
let setStatusLabel, setResponseBody;

let progress;

$(document).ready( () => {
  getStatusLabel = document.getElementById('rget-status-label');
  getResponseBody = document.getElementById('rget-response-body');

  setStatusLabel = document.getElementById('rset-status-label');
  setResponseBody = document.getElementById('rset-response-body');

  progress = document.getElementById('request-progress');
});

redisGet = () => {
  progress.style.width = '0%';
  collapsible = document.getElementById('rget-body');
  if (! $(collapsible).hasClass('show')) {
    $(collapsible).addClass('show');
  }

  key = document.getElementById('rget-key').value;
  axios.get(`/redis/get/${key}`)
  .then(response => {
    $(getStatusLabel).parent().addClass('text-success');
    getStatusLabel.textContent = `${response.status} ${response.statusText}`;
    let result = JSON.stringify(response.data);
    getResponseBody.value = result == '""' ? "Empty key" : result;
  })
  .catch(error => {
    $(getStatusLabel).parent().addClass('text-danger');
    getStatusLabel.textContent = `${error.response.status} ${error.response.statusText}`;
    getResponseBody.value = error;
  })
  .then(value => {
    progress.style.width = '100%';
    setTimeout( () => {
      progress.style.width = '0%';
    }, 2000);
  });
}

redisSet = () => {
  progress.style.width = '0%';
  collapsible = document.getElementById('rset-body');
  if (! $(collapsible).hasClass('show')) {
    $(collapsible).addClass('show');
  }

  key = document.getElementById('rset-key').value;
  value = document.getElementById('rset-value').value;
  axios.get(`/redis/set/${key}/${value}`)
  .then(response => {
    setStatusLabel.textContent = `${response.status} ${response.statusText}`;
    $(setStatusLabel).parent().removeClass('text-danger');
    $(setStatusLabel).parent().addClass('text-success');

    setResponseBody.value = response.data;
  })
  .catch(error => {
    setStatusLabel.textContent = `${error.response.status} ${error.response.statusText}`;
    $(setStatusLabel).parent().removeClass('text-success');
    $(setStatusLabel).parent().addClass('text-danger');
    setResponseBody.value = error;
  })
  .then(value => {
    progress.style.width = '100%';
    setTimeout( () => {
      progress.style.width = '0%';
    }, 2000);
  });
}
