import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
@Component({
  selector: 'app-li-tele',
  templateUrl: './li-tele.component.html',
  styleUrls: ['./li-tele.component.css']
})
export class LiTeleComponent implements OnInit {

  studentsList: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudnets();
  }

  getStudnets(){
    this.studentService.getByGrado("tele")
    .subscribe(res =>{
      this.studentsList = res;
      console.log(res);
    })
  }

}
