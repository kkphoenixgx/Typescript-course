import { default as Client } from './Client';
import Notify from './Notify';
let userName = 'Kauã'; // = document.queryselector('data-user-name')
let userEmail = 'kkphoenixgx@gmail.com'; // = document.queryselector('data-user-Email')
let userPassword = '12345678'; // = document.queryselector('data-user-password')
let userData = {
    "name": userName,
    "email": userEmail,
    "password": userPassword
};
const client = new Client(userData);
const notification = new Notify(client);
notification.sendEmail();
