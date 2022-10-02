export interface IClient {
    name :string;
    email :string;
    password :string;
}
  
export default class User{

    constructor(private userData :IClient){

    }

    // main methods
    
    create() :void{
        // ...
    }
    read() :void{
        // ...
    }
    delete() :void{
        // ...
    }

    // side methods

    update() :void{
        // ...
    }

    // getters and setters

    getEmail() :string{
        return this.userData.email
    }
  
}
  