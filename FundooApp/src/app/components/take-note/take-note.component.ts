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
  @Output() takeNoteEvent: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private service: NotesServicesService) { }
  createNote= this.formBuilder.group({
    note: ['', [Validators.required]],
    title: ['', [Validators.required]]
  });

  collapsed : boolean = true;
  ngOnInit(): void {
  }
  panelOpenState: boolean = false;
  togglePanel() {
    this.panelOpenState = !this.panelOpenState
  }
  collapseMatTitle(){
    this.collapsed = !this.collapsed;
  }
  onKey(value: any){
    
    if(this.createNote.invalid){
      return;
    }
    console.log("take note.ts");
    const currentDate = new Date();
    const Note = {
      title : value.title,
      description : value.note,
      createdTime : currentDate.toDateString
    }
    this.service.create(Note).subscribe((serve)=>{
      console.log(serve);
    });
  }
  sendNotification() {
    this.takeNoteEvent.emit();
}
}
