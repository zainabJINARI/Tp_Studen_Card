import { Component, Input } from '@angular/core';
import { Student } from '../models/Student';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  student?:Student

}
