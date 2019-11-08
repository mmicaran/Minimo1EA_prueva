import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-li-asig',
  templateUrl: './li-asig.component.html',
  styleUrls: ['./li-asig.component.css']
})
export class LiAsigComponent implements OnInit {
  
  subjectsList: Subject[] = [];

  constructor(private subjectServices: SubjectService) { }

  ngOnInit() {
    this.getStudnets();
  }

  getStudnets(){
    this.subjectServices.getSubjects()
    .subscribe(res =>{
      this.subjectsList = res;
      console.log(res);
    })
  }
}
