import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const apiUrl = 'https://127.0.0.1:8000/api/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get<any>(`${apiUrl}/${id}`);
  }

  addTask(task: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/ld+json');

    const form = {
      isCompleted: false,
      ...task
    }

    return this.http.post<any>(apiUrl, form, { headers });  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/${id}`);
  }
}
