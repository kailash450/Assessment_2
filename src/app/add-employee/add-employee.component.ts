import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { Employee } from '../models/employee.model';

@Component({
  standalone:true,
  selector: 'app-add-employee',
  imports:[RouterLink,FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: Employee = {  id:0,name: '', email: '',phone:'',salary:0 };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  addEmployee(): void {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
