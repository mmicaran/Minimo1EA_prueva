import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { NgForm } from '@angular/forms';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  postSubject(form: NgForm){
    this.subjectService.postSubject(form.value.name)
    .subscribe(res => {
      this.resetForm(form);
    });
  }

  resetForm(form?: NgForm){
    if (form)
      form.reset();
      this.subjectService.selectedSubject = new Subject;
  }

}
