import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  getEventsList() {
    return this.http.get<Event[]>('/assets/events.json');
  }
  constructor(private http: HttpClient) { }
}

export interface Event {
  type: string;
  title: string;
  price: number;
  description: string;
  dates: [ {from: Date , to: Date}];
}

