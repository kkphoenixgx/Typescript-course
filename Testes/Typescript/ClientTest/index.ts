import{  default as Client, IClient } from './Client'
import Notify from './Notify'

let userName :string = 'Kauã'// = document.queryselector('data-user-name')
let userEmail :string = 'kkphoenixgx@gmail.com'// = document.queryselector('data-user-Email')
let userPassword :string = '12345678'// = document.queryselector('data-user-password')

let userData :IClient = {
  "name": userName,
  "email": userEmail,
  "password": userPassword
}

const client = new Client(userData)
const notification = new Notify(client)

notification.sendEmail();