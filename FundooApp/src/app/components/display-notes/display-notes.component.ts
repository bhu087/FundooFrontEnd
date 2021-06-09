import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  data:any;
  constructor(private service: NotesServicesService) { }

  ngOnInit(): void {
    console.log("get note.ts");
    this.service.getNotes().subscribe((serve)=>{
      this.data = JSON.stringify(serve);
      var res = JSON.parse(this.data);
      this.allNotes = res['response'];
      console.log(serve);
    });
  }
  allNotes:any=[]; 
  getNotes(){
    
  }
}
