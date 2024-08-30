import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from "../add-employee/add-employee.component";

@Component({
  standalone:true,
  selector: 'app-home',
  imports: [RouterLink, CommonModule, AddEmployeeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
