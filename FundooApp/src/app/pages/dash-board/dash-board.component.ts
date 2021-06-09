import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayNotesComponent } from 'src/app/components/display-notes/display-notes.component';
import { DrawerComponent } from 'src/app/components/drawer/drawer.component';
import { TakeNoteComponent } from './../../components/take-note/take-note.component'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  @ViewChild(DrawerComponent)
  private drawer!: DrawerComponent;

  @ViewChild(DisplayNotesComponent) private displayNotes!: DisplayNotesComponent;
  constructor() { }

  ngOnInit(): void {
    
  }
  onClick(){
    console.log(this.displayNotes.getNotes());
  }
 showDrawerToggle(){
   this.drawer.showDrawerToggle();
 }
}
