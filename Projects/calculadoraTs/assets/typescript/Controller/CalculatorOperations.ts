interface IOperationOption{
  onCalculate : Function
}

export default class CalculatorOperations{

  private onCalculate 

  constructor(
    public options :IOperationOption,
    private defaultOperation :Array<string> = []
  ){
    this.onCalculate = options.onCalculate;
  }

  // ----------- main methods -----------

  addition(value :string) :number{

    if(this.defaultOperation.length === 3) this.calculate()

    this.defaultOperation.push(value)
    console.log(this.defaultOperation);
    
    return this.length
  }
  getResult() :string{
    let result = '0' 

    try { result = ( eval(this.defaultOperation.join('')) ).toString() }
    catch(error) { result = 'ERROR' }
    
    return result
  }

  calculate() :void{
    let result = this.getResult()

    if(result.length > 12) result = result.substring(0, 12)

    this.defaultOperation = [result]

    this.onCalculate(result)
  }

  // ----------- getters and setters -----------

  get length() :number{
    return this.defaultOperation.length
  }

  get lastPosition() :string {
    return  this.defaultOperation.length ?  this.defaultOperation[this.defaultOperation.length -1] : '0'
  }
  set lastPosition(value :string){
    const lastIndex = this.defaultOperation.length ?  this.defaultOperation.length -1 : 0
  
    this.defaultOperation[lastIndex] = value
  }

}