import CalculatorDateAndTime from "./CalculatorDateAndTime.js";
import CalculatorOperations from "./CalculatorOperations.js";
import CalculatorScreen from "./CalculatorScreen.js";

export default class CalculatorController{

  constructor(
    private screen = new CalculatorScreen(),
    private operations = new CalculatorOperations( {
      onCalculate: (result :string) => this.screen.content = result
    } )
  ){
    new CalculatorDateAndTime()
    
    
    this.initButtonEvents()
    
  }

  // ----------- Main methods -----------

    initButtonEvents() :void {

      document.querySelectorAll('#teclado button').forEach( element=>{

        element.addEventListener( 'click', (event :Event) =>{
          
          let target :HTMLButtonElement | null =  event.target as HTMLButtonElement

          switch (target.id) {
            // ----------- Numbers -----------
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
              
              this.addNumber(Number (target.dataset.valor))
              break;
            // ----------- Operations -----------
            case 'multiplicacao':
            case 'adicao':
            case 'subtracao': 
            case 'divisao': 
            case 'porcentagem': 
              this.addOperator(target.dataset.valor as string)
            break;
            
            // ----------- specials -----------
            case 'ponto': 
            case 'desfazer': 
            case 'limpar':
            case 'igual': 
              this.calculate()
            break;

            default:
              break;
          }
        })

      } )

    }

    addNumber(number :number) :void {

      if( isNaN( Number(this.operations.lastPosition) ) ){
        this.addOperation(number.toString())
      }else{
        number = Number(this.operations.lastPosition.toString() + number )

        this.operations.lastPosition = number.toString()
      }

      this.screen.content = number.toString()

    }
    addOperator(value :string) :void{
      if( isNaN( Number(this.operations.lastPosition) ) ){
        this.operations.lastPosition = value
      }else{

        if(this.operations.length === 0 ) this.addOperation('0')

        this.addOperation(value)
      }
    }
    calculate() :void{
      this.operations.calculate()
    }
  
  // ----------- side methods -----------
  
    addOperation(value :string) :void{
      this.operations.addition(value)
      console.log(this.operations.length);
      
    }

}