import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  getMembersList(): Observable<Member[]> {
    return this.http.get<Member[]>('/assets/people.json');
  }
  constructor(private http: HttpClient) { }
}

export interface Member {
  firstname: string;
  secondname: string;
  dob: Date;
}

