import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ArchiveIconComponent } from './../../components/archive-icon/archive-icon.component';
import { NotesIconComponent } from './../../components/notes-icon/notes-icon.component';
import { RemainderIconComponent } from './../../components/remainder-icon/remainder-icon.component';
import { TrashIconComponent } from './../../components/trash-icon/trash-icon.component';
import { TakeNoteComponent } from './../../components/take-note/take-note.component'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  showDrawer = false;
  matBtn = "mat-after-expand";
  constructor() { }

  ngOnInit(): void {
  }
 showDrawerToggle(){
   if(this.showDrawer){
    this.showDrawer = false;
    this.matBtn = "mat-before-expand";
   }
   else{
     this.showDrawer = true;
     this.matBtn = "mat-after-expand";
   }
 }
}
