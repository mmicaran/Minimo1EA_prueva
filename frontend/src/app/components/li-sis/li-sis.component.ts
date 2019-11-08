import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-li-sis',
  templateUrl: './li-sis.component.html',
  styleUrls: ['./li-sis.component.css']
})
export class LiSisComponent implements OnInit {
  studentsList: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudnets();
  }

  getStudnets(){
    this.studentService.getByGrado("sis")
    .subscribe(res =>{
      this.studentsList = res;
      console.log(res);
    })
  }
}
