const express= require('express');
const router = express.Router();
const subjectCtrl = require('../controllers/subject.controller')

//Obtener todas las asignaturas
router.get('/api/subject', subjectCtrl.getSubjects);

//Añadir asignatura
router.post('/api/subject', subjectCtrl.addSubject);

//Obtener asignatura
router.get('/api/subject/:id', subjectCtrl.getSubject);

//Estudiante en asignatira
router.put('/api/subject', subjectCtrl.putStudentInSubject);

//Eliminar asignatura
router.delete('/api/subject/:id', subjectCtrl.deletSubject);

module.exports = router;
