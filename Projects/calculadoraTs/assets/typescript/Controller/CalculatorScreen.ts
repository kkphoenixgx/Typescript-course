export default class CalculatorScreen{

  constructor(
    private elScreen :HTMLDivElement | null = document.querySelector('#values')
  ){
    this.content = '0'
  }

  // ----------- main methods -----------



  // ----------- getters and setters -----------

  set content(value :string){

    if( !this.elScreen ) return
    
    if(value.toString().length > 12 ){
      this.elScreen.style.fontSize = '33px'
      value = ' too big ( ͡° ͜ʖ ͡°)'
    }

    this.elScreen.innerHTML = value.toString().replace('.', ',')

  }

  get content() :string{
    
    return this.elScreen? this.elScreen.innerHTML  : '0'

  }

}