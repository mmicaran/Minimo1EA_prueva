const Subject = require('../models/subject');
const Student = require('../models/student');

const subjectCtrl = {};

subjectCtrl.getSubjects = async (req, res) =>{
    const subjects = await Subject.find();
    res.json(subjects);
}

subjectCtrl.getSubject = async(req,res) =>{
    try {
        console.log(req.params.id);
        const subject = await Subject.findById(req.params.id);
        if(!subject){
            return res.status(404).send({message: 'Subject not found'})
        }else{
            res.status(200).send(subject);
        }
    } catch (err) {
        res.status(500).send(err);
    }
    
}

subjectCtrl.addSubject = async (req, res) =>{

    const subject = new Subject(req.body);
    await subject.save();
    res.json({
        'status': 'Subject saved'
    });
    
}

subjectCtrl.putStudentInSubject = async (req, res) =>{
    
    try {
        const student = await Student.findById(req.body.id_student);
        console.log(student);
        if(!student){
            return res.status(404).send({message: 'Student not found'})
        }else{
            await Subject.findByIdAndUpdate(req.body.id_subject, {$set:{students: student}});
            res.status(200).send({message: 'DONE'});
        }
    } catch (err) {
        res.status(500).send(err);
    }    

}

subjectCtrl.deletSubject = async (req, res) =>{
    await Subject.findByIdAndDelete(req.params.id);
    res.json({status: "asigantira eliminada"});
}

module.exports = subjectCtrl;