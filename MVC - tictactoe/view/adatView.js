class Elem{
    #allapot;
    #index;
    constructor(index, allapot) {
        // html előállítása
        const cella = '<div class="elem"><p></p></div>';
        $(".jatekter").append(cella);
        this.divElem = $(".jatekter").children("div:last-child");
        this.pElem = this.divElem.children("p");
        
        this.#allapot = allapot;
        this.#index = index;

        this.divElem.on('click' , () => {
            // setErtek-et a controller fogja megmondani
            // this.setErtek("X");
            this.kattintas();
        })

    }

    setErtek(jel) {
        this.pElem.html(jel);
        this.#allapot = true;
        this.divElem.off('click');
    }

    kattintas() {
        let clickEvent = new CustomEvent("clickElem",{detail:this.#index})
       
        window.dispatchEvent(clickEvent)
    }
}

export default Elem;