import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  data:any;
  allNotes:any=[];
  @Output() notes: EventEmitter<any[]> = new EventEmitter<any[]>();
  constructor(private service: NotesServicesService) { }

  ngOnInit(): void {
    console.log("get note.ts");
    this.service.getNotes().subscribe((service)=>{
      this.data = JSON.stringify(service);
      var res = JSON.parse(this.data);
      this.allNotes = res['response'];
      this.notes.emit(this.allNotes);
    });
  }
  getNotes(notes: any){
    this.notes.emit(this.allNotes);
  }
}
