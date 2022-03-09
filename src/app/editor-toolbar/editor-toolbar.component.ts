import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.css']
})
export class EditorToolbarComponent implements OnInit {
  @Input('editor') editor: any;
  constructor() { }

  ngOnInit(): void {
  }

}
