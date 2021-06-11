import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponentComponent } from 'src/app/components/dialog-component/dialog-component.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
 
  constructor(public dialog: MatDialog) { }
  showDrawer = false;
  notes = true;
  archive = false;
  allNotes:any =[];
  archivedNotes:any =[];
  openDialog(){
    let dialogRef = this.dialog.open(DialogComponentComponent);
  }
  ngOnInit(): void {
    console.log(this.archivedNotes);
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
 archiveNotes(event:any[]){
   console.log("COme here");
  console.log(event);
 }
 message:any = [];

  receiveMessage($event: any) {
    this.message = $event;
    console.log("Come here");
    console.log(this.message);
  }

}
