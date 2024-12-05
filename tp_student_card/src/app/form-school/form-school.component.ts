import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from '../services/etablissement.service';  // Adjust path if necessary
import { School } from '../models/School';  // Adjust path if necessary
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-school',
  standalone: true,
  imports: [  FormsModule],  // Add FormsModule if not already imported in the component
  templateUrl: './form-school.component.html',
  styleUrls: ['./form-school.component.css']
})
export class FormSchoolComponent implements OnInit {

  // Initialize school object
  public school: School = {
    id: 0,
    schoolName: '',
    abrv: ''
  };

  constructor(private schoolService: EtablissementService, private router: Router) {}

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  // Create a new school
  createSchool(): void {
    // Add new school using the EtablissementService
    this.schoolService.addSchool(new School(this.school.id, this.school.schoolName, this.school.abrv));
    this.router.navigate(['/addCard']);  // Redirect to home or school list page after creation
  }
}
