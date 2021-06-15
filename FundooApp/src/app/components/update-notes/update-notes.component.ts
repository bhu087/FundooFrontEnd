import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss'],
})
export class UpdateNotesComponent implements OnInit {
  @Input() notes: any;
  
  @ViewChild(DisplayNotesComponent) child!: DisplayNotesComponent;
  title: any;
  description : any;
  constructor(private formBuilder: FormBuilder) { }
  createNote = this.formBuilder.group({
    note: ['', [Validators.required]],
    title: ['', [Validators.required]]
  });
  ngOnInit(): void {
    this.title = this.notes.title,
    this.description = this.notes.description
  }
}
