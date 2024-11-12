import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsList = [
    new Student(2000204,"Hatim NACIRI","Euromed Polytechnic School","123467234544839294382496532"),
    new Student(20003203,"Hanae Saad","Ecole d'ingénieur BiomedTech","14783783287347843783234676532"),

  ]

  constructor() { }

  getStudentList(){
    return this.studentsList
  }

  addStudent(student:Student){
  
    this.studentsList.push(student)
    return student
     
  }
}
