import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private studentService:StudentsService
   studentList:any
  constructor(ex:StudentsService){
    this.studentService=ex

  }

  

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe((students) => {
      this.studentList = students;
    });
  }


  

  
  


}
