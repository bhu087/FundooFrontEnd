import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  childData: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }
  callNotes(event:any[]){
    this.childData = event;
    console.log("inside child");
    console.log(this.childData);
  }
}
