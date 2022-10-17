import Elem from "../view/adatView.js";
import AdatModel from "../model/adatModel.js";

class AdatController{
    #elemLista = []
    constructor() {
        const adatModel = new AdatModel();
        // view példányosítása

        for (let index = 0; index < 9; index++) {
            this.#elemLista.push(new Elem(index, false));
        }

        console.log(this.#elemLista)

        $(window).on("clickElem", (event) => {
            let index = event.detail;
            let kov = adatModel.kovetkezo(index);
            this.#elemLista[index].setErtek(kov);
        })
    }
}

export default AdatController;