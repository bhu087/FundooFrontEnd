import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {
  data:any;
  allNotes:any=[];
  @Output() notes = new EventEmitter();
  constructor(private notesService: NotesServicesService) { }

  ngOnInit(): void {
    this.callNotes();
  }
  callNotes(){
    this.notesService.getNotes().subscribe((service)=>{
      this.data = JSON.stringify(service);
      var res = JSON.parse(this.data);
      this.allNotes = res['response'];
      console.log(this.allNotes);
    });
  }
  ngAfterViewInit(){
    this.callNotes();
  }
  getNotification(event:any){
    this.callNotes();
  }
}
