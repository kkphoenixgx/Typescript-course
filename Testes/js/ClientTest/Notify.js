export default class Notify {
    client;
    constructor(client) {
        this.client = client;
    }
    sendEmail() {
        try {
            console.log(this.getClient().getEmail());
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
    // getters and setters
    getClient() {
        return this.client;
    }
}
