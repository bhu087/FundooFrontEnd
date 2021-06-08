import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IconsComponent } from './../icons/icons.component';
import { NotesServicesService } from '../../services/notesService/notes-services.service'
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  //@Output() output: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private service: NotesServicesService) { }
  createNote= this.formBuilder.group({
    note: ['', [Validators.required]],
    title: ['', [Validators.required]]
  });

  collapsed : boolean = false;
  collapseExpansion: boolean = true;
  panelTitle: boolean = true;
  ngOnInit(): void {
  }
  togglePanelTitle(){
    this.panelTitle = false;
  }
  onKey(value: any){
    if(this.createNote.invalid){
      return;
    }
    this.panelTitle = true;
    console.log("take note.ts");
    const Note = {
      title : value.title,
      description : value.note
    }
    this.service.create(Note).subscribe((serve)=>{
      console.log(serve);
    });
  }
}
