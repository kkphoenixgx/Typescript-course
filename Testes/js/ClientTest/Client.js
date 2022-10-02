export default class User {
    userData;
    constructor(userData) {
        this.userData = userData;
    }
    // main methods
    create() {
        // ...
    }
    read() {
        // ...
    }
    delete() {
        // ...
    }
    // side methods
    update() {
        // ...
    }
    // getters and setters
    getEmail() {
        return this.userData.email;
    }
}
