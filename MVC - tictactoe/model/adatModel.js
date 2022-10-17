class AdatModel {
    
    #tomb = ["-","-","-","-","-","-","-","-","-"];
    #lepesszam;

    constructor() {
        this.#lepesszam = 0;
    }

    kovetkezo(index) {
        let kovetkezojatekos="X";
        let nev;
        if (this.#lepesszam < 8) {
            this.#lepesszam++;
            if (this.#lepesszam %2 == 0) {
                kovetkezojatekos = "O";
            }
        } else {
            console.log("vége a játéknak")
        }
        this.#tomb[index] = kovetkezojatekos;

        if (this.#lepesszam >= 5) {
            this.ellenorzes();
        }
        console.log(this.#tomb)
        return kovetkezojatekos;
    }

    ellenorzes() {

    }
}

export default AdatModel;