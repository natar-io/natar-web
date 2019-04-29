import { Controller } from "stimulus"

export default class extends Controller {

  static get targets() {
    return [ "list", "status" ]
  }

  connect(){
    console.log("[DIST] Process stimulus connected");
    this.reload();
  }

  reload() {
    this.block();
    axios.get('http://localhost:4567/service/info/all')
    .then( (response) => {
      this.listTarget.innerHTML = response.data;
      $('#process-table').bootstrapTable();
    })
    .catch( (error) => {
      console.log(error);
    })
    .then(() => {
      this.unblock();
    });
  }

  block() {
    $(this.element).block({
      message: '<i class="icon-spinner2 spinner"></i>',
      overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.8,
        cursor: 'wait',
        'box-shadow': '0 0 0 1px #ddd'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'none'
      }
    });
  }

  unblock() {
    $(this.element).unblock();
  }

  service(event) {
    let name = event.target.dataset.name;
    let action = event.target.dataset.nextaction;
    //this.block();

    axios.get('http://localhost:4567/service/' + name + '/' + action)
    .then( (response) => {
      successNotif('Service', '<strong>' + name.charAt(0).toUpperCase() + name.slice(1) + '</strong> successfully <strong>' + action + 'ed. </strong>');
    })
    .catch ( (error) => {
      errorNotif('Service', 'Oops ! </br> <strong>' + name.charAt(0).toUpperCase() + name.slice(1) + '</strong> failed to <strong>' + action + '</strong>.');
    })
    .then ( () => {
      this.reload();
    });
  }
}
