import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add', component: AddEmployeeComponent },
    { path: 'update/:id', component: UpdateEmployeeComponent },
    { path: 'delete/:id', component: DeleteEmployeeComponent },
    { path: '**', component: ErrorComponent }
  ];


  
