import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  getMembersList() {
    return this.http.get<Member[]>('/assets/people.json');
  }
  constructor(private http: HttpClient) { }
}

export interface Member {
  firstname: string;
  secondname: string;
  dob: Date;
}

