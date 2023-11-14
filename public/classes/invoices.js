export class Invoice {
    // readonly country:string;
    // private city:string;
    // public population:number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.country = 'India'
        // console.log(this.city);
        return `${this.client} owes Rs.${this.amount} for ${this.details}`;
    }
}
