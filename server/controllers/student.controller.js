const Student = require('../models/student');

const studentCtrl = {};

studentCtrl.getStudent = async (req, res) =>{
    const student = await Student.find();
    res.json(student);
}

studentCtrl.getStudents = async(req,res) =>{
    try {
        console.log(req.params.id);
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(404).send({message: 'Student not found'})
        }else{
            res.status(200).send(student);
        }
    } catch (err) {
        res.status(500).send(err);
    }
    
}

studentCtrl.addStudent = async (req, res) =>{
    //sino no lo mapea bien
    const student = new Student();
    console.log(student);
    student.name = req.body.name;
    student.address = req.body.address;
    student.phone = req.body.phone;
    console.log(student);
    //*****************
    
    try {
        await student.save();
        res.status(200).send({message: "Student created"});
    } catch (error) {
        res.status(500).send(err);
        console.log(err);
    }
    
}

studentCtrl.deleteStudent = async (req, res) =>{
    await Student.findByIdAndDelete(req.params.id);
    res.json({status: "estudinate eliminado"});
}

module.exports  = studentCtrl;
