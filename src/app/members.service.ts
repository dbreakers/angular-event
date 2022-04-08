import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  
  getMembersList() {
    return this.http.get<Member[]>('/assets/people.json');
  }
  constructor(private http: HttpClient) { 
     
  }
}

export interface Member {
  firstname: string;
  secondname: string;
  dob: Date;
}

