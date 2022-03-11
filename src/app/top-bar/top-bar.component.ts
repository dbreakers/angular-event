import { Component, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  
  @Output() sidenavToggle = new EventEmitter();

public onToggleSidenav = () => { 
  this.sidenavToggle.emit();
}
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/