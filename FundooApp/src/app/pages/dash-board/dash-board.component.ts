import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayNotesComponent } from 'src/app/components/display-notes/display-notes.component';
import { DrawerComponent } from 'src/app/components/drawer/drawer.component';
import { TakeNoteComponent } from './../../components/take-note/take-note.component'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
 
  constructor() { }
  showDrawer = false;
allNotes:any =[];

  ngOnInit(): void {
    
  }
  displayNote(notes:any){
    this.allNotes = notes;
    console.log("Come here");
    console.log(this.allNotes);
  }
  onClick(){
    console.log();
  }
 showDrawerToggle(){
   this.showDrawer = !this.showDrawer;
 }

 message:any = [];

  receiveMessage($event: any) {
    this.message = $event;
    console.log("Come here");
    console.log(this.message);
  }

}
