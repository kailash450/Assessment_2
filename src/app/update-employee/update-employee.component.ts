import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = { id:0,name: '', email: '',phone:'',salary:0 };
  id: any;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    // this.id = +!this.route.params.pipe(map((p) => p['id']));
    console.log('Id:',this.id);
    this.employeeService.getEmployees().subscribe(employees => {
      this.employee = employees.find(c => c.id === this.id);
    });
  }

  updateEmployee(): void {
    console.log('hi');
    
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
