import { Controller } from "stimulus"

export default class extends Controller {

  static get targets() {
    return [ "cpu", "cpuprogress", "ram", "ramprogress", "disk", "diskprogress", "cpudetail"]
  }

  connect(){
    console.log("[DIST] System stimulus connected");
    this.reload();
    setInterval( () => {
      this.reload();
    }, 1000);
  }

  reload() {
    axios.get('http://localhost:4567/system/status')
    .then( (response) => {
      let values = response.data.split("\n");
      let cpu = values[0];
      let ram = values[1].split(';');
      let disk = values[2].split(';');
      this.cpuTarget.innerHTML = `${cpu}%`;
      this.ramTarget.innerHTML = `${parseInt(ram[0]/1000)}/${parseInt(ram[1]/1000)} MB`
      this.diskTarget.innerHTML = `${parseInt(disk[0])}/${parseInt(disk[1])} GB`;
      this.cpuprogressTarget.style.width = `${cpu}%`;
      this.ramprogressTarget.style.width = `${parseInt(ram[2])}%`;
      this.diskprogressTarget.style.width = `${parseInt(disk[2])}%`;
      axios.get('http://localhost:4567/test')
      .then( (reponse) => {
        this.cpudetailTarget.innerHTML = reponse.data;
      });
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}
