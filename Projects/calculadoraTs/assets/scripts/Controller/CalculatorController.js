import CalculatorDateAndTime from "./CalculatorDateAndTime.js";
import CalculatorOperations from "./CalculatorOperations.js";
import CalculatorScreen from "./CalculatorScreen.js";
export default class CalculatorController {
    screen;
    operations;
    constructor(screen = new CalculatorScreen(), operations = new CalculatorOperations({
        onCalculate: (result) => this.screen.content = result
    })) {
        this.screen = screen;
        this.operations = operations;
        new CalculatorDateAndTime();
        this.initButtonEvents();
    }
    initButtonEvents() {
        document.querySelectorAll('#teclado button').forEach(element => {
            element.addEventListener('click', (event) => {
                let target = event.target;
                switch (target.id) {
                    case 'zero':
                    case 'um':
                    case 'dois':
                    case 'tres':
                    case 'quatro':
                    case 'cinco':
                    case 'seis':
                    case 'sete':
                    case 'oito':
                    case 'nove':
                        this.addNumber(Number(target.dataset.valor));
                        break;
                    case 'multiplicacao':
                    case 'adicao':
                    case 'subtracao':
                    case 'divisao':
                    case 'porcentagem':
                        this.addOperator(target.dataset.valor);
                        break;
                    case 'ponto':
                    case 'desfazer':
                    case 'limpar':
                    case 'igual':
                        this.calculate();
                        break;
                    default:
                        break;
                }
            });
        });
    }
    addNumber(number) {
        if (isNaN(Number(this.operations.lastPosition))) {
            this.addOperation(number.toString());
        }
        else {
            number = Number(this.operations.lastPosition.toString() + number);
            this.operations.lastPosition = number.toString();
        }
        this.screen.content = number.toString();
    }
    addOperator(value) {
        if (isNaN(Number(this.operations.lastPosition))) {
            this.operations.lastPosition = value;
        }
        else {
            if (this.operations.length === 0)
                this.addOperation('0');
            this.addOperation(value);
        }
    }
    calculate() {
        this.operations.calculate();
    }
    addOperation(value) {
        this.operations.addition(value);
        console.log(this.operations.length);
    }
}
//# sourceMappingURL=CalculatorController.js.map