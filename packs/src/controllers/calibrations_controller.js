import { Controller } from "stimulus"

export default class extends Controller {

  static get targets() {
    return [];
  }

  connect() {
    console.log("[DIST] Calibrations controller connected");
  }

  loadAllCamera() {
    console.log("Load all camera");
  }

  loadAllProjector() {
    console.log("Load all projector");
  }

  loadCalibration(event) {
    let file = event.target.dataset.file;
    let output = event.target.dataset.output;
    let type =  event.target.dataset.type;

    axios.get(`http://localhost:4567/service/load_configuration?file=${file}&output=${output}&type=${type}`)
    .then( (response) => {
      let noticeSuc = new PNotify({
        title: 'Calibration loaded',
        text: `<strong>Succeed with message</strong>: <br/> ${response.data}`,
        type: 'success',
        styling: 'fontawesome',
        buttons: {
          sticker: false
        }
      });
      noticeSuc.get().click(function() {
        noticeSuc.remove();
      });
    })
    .catch( (error) => {
      let noticeErr = new PNotify({
        title: 'Calibration not loaded',
        text: `Sorry ! <br/> We are unable to load the calibration file <strong>${file}</strong>. <br/> ${error}`,
        type: 'error',
        styling: 'fontawesome',
        buttons: {
          sticker: false
        }
      });
      noticeErr.get().click(function() {
        noticeErr.remove();
      });
    });
  }
}
