import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  studentsList: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudnets();
  }

  getStudnets(){
    this.studentService.getByGrado("aero")
    .subscribe(res =>{
      this.studentsList = res;
      console.log(res);
    })
  }


}
