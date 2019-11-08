import { Phone } from './phone';

export class Student {

    constructor(_id = '', name = '', address = '', phone = null){
        this._id = _id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    _id: string;
    name: string;
    address: string;
    studies: string;
    phone: Phone[];

    addPhone(phone: Phone[]){
      this.phone=phone;
    }

   
}