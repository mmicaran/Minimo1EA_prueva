const express= require('express');
const router = express.Router();
const student = require('../controllers/student.controller')

//Obtener todos los estudiantes
router.get('/api/student', student.getStudent);

//Añadir estudinate
router.post('/api/student', student.addStudent);

//Obtener estudiante
router.get('/api/student/:id', student.getStudents);

//Eliminar estudiante
router.delete('/api/student/:id', student.deleteStudent);

//Obtener estudiantes por grado
router.get('/api/student/grado/:grado', student.getByGrado);


module.exports = router;