import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../models/employee.model';

@Component({
  standalone:true,
  selector: 'app-delete-employee',
  imports:[CommonModule],
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employee: Employee = {id:0, name: '', email: '',phone:'',salary:0 };
  id: any;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.employeeService.getEmployees().subscribe(employees => {
      this.employee = employees.find(c => c.id === this.id);
    });
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
