import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCardComponent } from './add-card/add-card.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
    { path: '', component:  HomeComponent},
    { path: 'addCard', component:  AddCardComponent},
    { path: 'success', component:  SuccessComponent},



];
