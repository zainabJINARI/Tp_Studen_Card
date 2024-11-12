import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/Student';
import {FormControl, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent {
  private studentService:StudentsService

  constructor(ex:StudentsService,private router:Router){
    this.studentService=ex

  }
  newStudent?:Student
  student: Student = {
    fullname: '',
    schoolName: 'EIDIA',
    id: 0,
    rib:""
  };

  CreateCard(){
  
    this.studentService.addStudent(new Student(this.student.id,this.student.fullname,this.student.schoolName,this.student.rib))
    this.router.navigate(['/'])
  
  }

}


