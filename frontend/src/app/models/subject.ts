export class Subject {

    constructor(_id = '', name = '', student = null){
        this._id = _id;
        this.name = name;
        this.student = student;        
    }

    _id: string;
    name: string;
    student: [];
    
}
