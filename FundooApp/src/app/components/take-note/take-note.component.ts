import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  constructor() { }
  collapsed : boolean = false;
  panelTitle: boolean = true;
  ngOnInit(): void {
  }
  togglePanelTitle(){
    this.panelTitle = false;
  }
}
