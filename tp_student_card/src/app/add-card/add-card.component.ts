import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/Student';
import {FormControl, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { EtablissementService } from '../services/etablissement.service';
import { School } from '../models/School';
@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent implements OnInit{
  private studentService:StudentsService
  private schoolService:EtablissementService
  public listSchool:School[]=[]
  constructor(ex:StudentsService,es:EtablissementService,private router:Router){
    this.studentService=ex
    this.schoolService=es
    


  }


  ngOnInit(): void {
    this.schoolService.getSchoolList().subscribe((schools) => {
      this.listSchool = schools;
    });
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


