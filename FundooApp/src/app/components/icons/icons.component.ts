import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() notes:any;
@Output() output: EventEmitter<any> = new EventEmitter();
  constructor(private notesService: NotesServicesService) { }

  

  ngOnInit(): void {
  }
  addToArchive() {
    console.log(this.notes.notesId);
    this.notesService.addToTrash(this.notes.notesId).subscribe((service) => {
      console.log(service);
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
