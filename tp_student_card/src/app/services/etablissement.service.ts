import { Injectable } from '@angular/core';
import { School } from '../models/School';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

 


  private schoolsList = new BehaviorSubject<School[]>([
    new School(1,"Ecole d'ingenieurie digitale et d'intelligence artificielle","Eidia"),
    new School(2,"Euromed Polytechnic School","EPS"),
    new School(3,"Ecole Euromed d'Architecture de Design et Urbanisme","EMADU"),
    new School(3,"Ecole d'ingénieur BiomedTech","BiomedTech"),
    new School(4,"Faculté des Sciences Humaines et Sociales","FSHS"),
    new School(5,"Euromed Business School","EBS"),

    
  ]);

  constructor() { }

  getSchoolList(): Observable<School[]> {
    return this.schoolsList.asObservable();
  }

  addSchool(school: School) {
    const currentList = this.schoolsList.value;
    this.schoolsList.next([...currentList, school]);
  }
}
