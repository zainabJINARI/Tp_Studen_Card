import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentsService } from '../services/students.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent  {
 
  constructor (private studentSer:StudentsService){

  }
  lastStudent?:Student


  // ngOnInit(): void {
  //   this.lastStudent= this.studentSer.getStudentList()[this.studentSer.getStudentList().length-1]
  // }

}
