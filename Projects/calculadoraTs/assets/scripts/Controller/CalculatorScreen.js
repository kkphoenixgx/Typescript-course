export default class CalculatorScreen {
    elScreen;
    constructor(elScreen = document.querySelector('#values')) {
        this.elScreen = elScreen;
        this.content = '0';
    }
    set content(value) {
        if (!this.elScreen)
            return;
        if (value.toString().length > 12) {
            this.elScreen.style.fontSize = '33px';
            value = ' too big ( ͡° ͜ʖ ͡°)';
        }
        this.elScreen.innerHTML = value.toString().replace('.', ',');
    }
    get content() {
        return this.elScreen ? this.elScreen.innerHTML : '0';
    }
}
//# sourceMappingURL=CalculatorScreen.js.map