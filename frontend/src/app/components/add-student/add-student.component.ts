import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { NgForm } from "@angular/forms";
import { Student } from 'src/app/models/student';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers: [StudentService]
})
export class AddStudentComponent implements OnInit {

  student: Student;
  phone: Phone[];

  constructor(private studentService: StudentService) { 
    this.student = new Student();
    this.phone = [];
  }

  ngOnInit() {
  }

  postStudent(form: NgForm){
   this.student.name = form.value.name;
   this.student.address = form.value.address;
   this.student.studies = form.value.grado;
   console.log(this.student);
   this.phone[0] = new Phone('work', form.value.phone1);
   this.phone[1] = new Phone('home', form.value.phone2);
   console.log(this.phone);
   this.student.addPhone(this.phone);
   this.studentService.postStudent(this.student)
      .subscribe(res => {
        this.resetForm(form);
    });

  }

  resetForm(form?: NgForm){
    if (form)
      form.reset();
      this.studentService.selectedStudent = new Student;
  }

}
