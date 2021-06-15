import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { NotesComponent } from '../notes/notes.component';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

export interface UsersData {
  "notesId": number,
  "title": string,
  "description": string,
  "createdTime": string,
  "modifiedTime": string,
  "remainder": string,
  "image": string,
  "isArchive": boolean,
  "isTrash": boolean,
  "isPin": boolean,
  "color": string,
  "userID": number,
}

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  data:any;
  @Input() allNotes: any[]= [];
  constructor(private service: NotesServicesService, public dialog: MatDialog) { }
  showButton: boolean = false;
  ngOnInit(): void {
  }
  openAddFileDialog(item:any) {
    this.dialog.open(DialogComponentComponent, {
      disableClose: true,
      data :{'notesId' : item.notesId,
      'title': item.title,
  'description': item.description,
  'modifiedTime': 'string',
  'remainder': 'string',
  'image': item.image,
  'isArchive': item.isArchive,
  'isTrash': item.isTrash,
  'isPin': item.isPin,
  'color': item.color,
  'userID': item.userID,
    }
    });
  }
}
