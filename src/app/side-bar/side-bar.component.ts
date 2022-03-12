import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
