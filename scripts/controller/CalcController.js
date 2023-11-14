 class CalcController {
    constructor() {
        let displayCalcEl = document.querySelector("#display");
        let dateEL = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        this._currentDate;
        this.initialize();
    }
    initialize() {



        this._dateEL.innerHTML = "13/11/2023";
        this._timeEl.innerHTML = "00:00";
    }
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }    
    set displayCalc(valor) {
        this._displayCalcEL.innerHTML = valor;
    }
    get currentDate() {
        return new Date();
    }
    set currentDate(valor) {
        this._currentDate = valor;
    }
}
