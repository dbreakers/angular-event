import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCampground, faCheckCircle, faCompress,faExpand } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventsList = this.eventsService.getEventsList();
  faCampground = faCampground;
  faCheckCircle = faCheckCircle;
  faMinimise = faCompress;
  faMaximise = faExpand;
  tilesize = true;
  constructor(private eventsService: EventsService,library: FaIconLibrary) { 
    library.addIcons(faCampground)

    
  }
  toggleDisplay() {
    this.tilesize=!this.tilesize;
  }
  ngOnInit(): void {
  }

}
