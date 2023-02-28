export default class CalculatorDateAndTime{

  constructor(
  
    private _elDate :HTMLDivElement | null = document.querySelector('#datetime > div:nth-child(2)'),
    private _elTime :HTMLTimeElement | null = document.querySelector('#datetime time')
  
  ){

    this.renderDate()
    setInterval( ()=> this.renderDate() , 1000 )
    
  }

  // ----------- main methods -----------


  renderDate(){
    const dateNow = new Date()
    const day = dateNow.getDate()
    const month = dateNow.toLocaleDateString("pt-br", { month: 'long' })
    const year = dateNow.getFullYear()

    const hour = dateNow.getHours();
    const colonToggle = ( dateNow.getSeconds() % 2 === 0 )? ':' : ' '
    const minutes = dateNow.getMinutes().toString().padStart(2,'0')

    this.date = `${day} ${month} ${year}`
    this.time = `${hour}${colonToggle}${minutes}`
  }


  // ----------- getters and setters -----------

  set date(value :string){
    
    if( !this._elDate ) return
    this._elDate.innerText = value

  }

  set time(value :string){

    if( !this._elTime ) return
    this._elTime.innerText = value

  }

}