import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';


@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  message: string = "Hi Im archive";
  data: string = "";
  archivedNotes: any=[];
  constructor(private notesService : NotesServicesService) { }
  @Output() archiveNotes = new EventEmitter();
  ngOnInit(): void {
    this.notesService.getArchivedNotes().subscribe((service)=>{
      this.data = JSON.stringify(service);
      var res = JSON.parse(this.data);
      this.archivedNotes = res['response'];
      this.archiveNotes.emit(this.archivedNotes);
    });
  }
}
