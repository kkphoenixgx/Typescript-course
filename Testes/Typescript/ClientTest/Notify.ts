import Client from './Client'

export default class Notify {

    constructor(private client :Client){
    }
  
    sendEmail() :boolean {
      try{
       console.log(this.getClient().getEmail())
       return true
      } catch(error){
        console.error(error);
        return false
      }
    }
  
   // getters and setters
  
    getClient(){
      return this.client
    }
  
  }