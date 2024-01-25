import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Student} from "../student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  server: string = "http://localhost:5277/api/v1/Students";

  constructor(private http: HttpClient) { }

  students$ = this.http.get<Student[]>(
    `${this.server}/all`);
}

