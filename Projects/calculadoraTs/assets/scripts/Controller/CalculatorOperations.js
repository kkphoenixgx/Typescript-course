export default class CalculatorOperations {
    options;
    defaultOperation;
    onCalculate;
    constructor(options, defaultOperation = []) {
        this.options = options;
        this.defaultOperation = defaultOperation;
        this.onCalculate = options.onCalculate;
    }
    addition(value) {
        if (this.defaultOperation.length === 3)
            this.calculate();
        this.defaultOperation.push(value);
        console.log(this.defaultOperation);
        return this.length;
    }
    getResult() {
        let result = '0';
        try {
            result = (eval(this.defaultOperation.join(''))).toString();
        }
        catch (error) {
            result = 'ERROR';
        }
        return result;
    }
    calculate() {
        let result = this.getResult();
        if (result.length > 12)
            result = result.substring(0, 12);
        this.defaultOperation = [result];
        this.onCalculate(result);
    }
    get length() {
        return this.defaultOperation.length;
    }
    get lastPosition() {
        return this.defaultOperation.length ? this.defaultOperation[this.defaultOperation.length - 1] : '0';
    }
    set lastPosition(value) {
        const lastIndex = this.defaultOperation.length ? this.defaultOperation.length - 1 : 0;
        this.defaultOperation[lastIndex] = value;
    }
}
//# sourceMappingURL=CalculatorOperations.js.map