import { HasFormatter } from "../interfaces/HasFormatter.js";

export  class Invoice implements HasFormatter {
    // readonly country:string;
    // private city:string;
    // public population:number;

    constructor(
        readonly client:string,
        private details:string,
        public amount:number,

        
    ){}

    format(){
        // this.country = 'India'
        // console.log(this.city);
        return `${this.client} owes Rs.${this.amount} for ${this.details}`;
    }

}
