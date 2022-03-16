import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder,FormGroup, FormArray } from '@angular/forms';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCampground, faGraduationCap, faCalendarDay, faHandshake, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { IDeactivateComponent } from '../deactivate-guard.service';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventCreateComponent implements OnInit, IDeactivateComponent {
  eventForm! : FormGroup;
  editor = new Editor({
    extensions: [StarterKit],
  });
  value = '<p>Hello,ewewqewqeqw <b>Tiptap!</b></p>'; 
  faEvent = faCampground;
  faTrain = faGraduationCap;
  faProg = faCalendarDay;
  faMeet = faHandshake;
  faInfo = faInfoCircle;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      dates: this.fb.array([]),
      title: '',
      type: '',
      price: 0,
      description: '',
      signup : false,
      signup_deadline: '',
      splitsession : '',
      maximum: 0,
      maxinc : this.fb.array([]),
      draft: true,
      location: '',
      longitude: 0.0,
      latitude: 0.0,
      seeothers: false,
      rota: false
    });
    
  //var na = this.eventForm.controls['dates'] as FormArray;
  var na = this.eventForm.get('dates') as FormArray;
  na.push(this.newDates());
  }

  addNewDates() {
    var na = this.eventForm.get('dates') as FormArray;
    na.push(this.newDates());
    console.log("hjjh");
  }
  newDates(): FormGroup {
    return this.fb.group({
      from: '',
      to: '',
      start: '',
      finish: ''
    });
  }
  onSubmit() {
    console.log(this.eventForm.value);
  }

  eventDates(): FormArray {
    return this.eventForm.get('dates') as FormArray;
  }

  deleteDates(dateIndex: number) {
    this.eventDates().removeAt(dateIndex);
  }

  public canExit(): boolean {
    return this.eventForm.dirty
      ? window.confirm('You have unsaved changes.  Are you sure you want to leave the page?')
      : true;
  };
}
