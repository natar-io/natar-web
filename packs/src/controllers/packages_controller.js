import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return [ "list" ]
  }

  connect() {
    console.log("[DIST] Packages controller connected");
    this.reload();
  }

  reload() {
    this.block() // Plays an animation
    axios.get('http://localhost:4567/system/packages')
    .then( (response) => {
      this.listTarget.innerHTML = response.data;
      $("#packages-table").bootstrapTable();
    })
    .catch( (error) => {
      console.log(error);
    })
    .then( () => {
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

  unblock(){
    $(this.element).unblock();
  }
}
