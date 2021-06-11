import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  data:any;
  @Input() allNotes: any[]= [];
  constructor(private service: NotesServicesService) { }
  showButton: boolean = false;
  ngOnInit(): void {
  }
}
