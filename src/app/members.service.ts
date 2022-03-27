import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private handleError: HandleError;
  getMembersList(): Observable<Member[]> {
    return this.http.get<Member[]>('/assets/people.json').pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }
  constructor(private http: HttpClient,  httpErrorHandler: HttpErrorHandler) { 
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }
}

export interface Member {
  firstname: string;
  secondname: string;
  dob: Date;
}

