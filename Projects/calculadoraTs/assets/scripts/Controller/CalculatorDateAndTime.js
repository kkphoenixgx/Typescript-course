export default class CalculatorDateAndTime {
    _elDate;
    _elTime;
    constructor(_elDate = document.querySelector('#datetime > div:nth-child(2)'), _elTime = document.querySelector('#datetime time')) {
        this._elDate = _elDate;
        this._elTime = _elTime;
        this.renderDate();
        setInterval(() => this.renderDate(), 1000);
    }
    renderDate() {
        const dateNow = new Date();
        const day = dateNow.getDate();
        const month = dateNow.toLocaleDateString("pt-br", { month: 'long' });
        const year = dateNow.getFullYear();
        const hour = dateNow.getHours();
        const colonToggle = (dateNow.getSeconds() % 2 === 0) ? ':' : ' ';
        const minutes = dateNow.getMinutes().toString().padStart(2, '0');
        this.date = `${day} ${month} ${year}`;
        this.time = `${hour}${colonToggle}${minutes}`;
    }
    set date(value) {
        if (!this._elDate)
            return;
        this._elDate.innerText = value;
    }
    set time(value) {
        if (!this._elTime)
            return;
        this._elTime.innerText = value;
    }
}
//# sourceMappingURL=CalculatorDateAndTime.js.map