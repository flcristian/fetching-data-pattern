import { Component } from '@angular/core';
import {StudentService} from "../student-service/student-service.service";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  constructor(private service: StudentService) { }

  recipes$ = this.service.students$;
}
