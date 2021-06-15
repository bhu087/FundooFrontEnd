import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesServicesService } from 'src/app/services/notesService/notes-services.service';

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
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent implements OnInit {

  constructor(private notesService: NotesServicesService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
      console.log(data);
     }
     title: string= this.data.title.toString();
     description: string = this.data.description.toString();
     createNote = this.formBuilder.group({
      FormDescription: ['', [Validators.required]],
      FormTitle: ['', [Validators.required]]
    });
  ngOnInit(): void {
  }
  updateData(){
    const Note = {
      notesId : this.data.notesId,
      title : this.title,
      description : this.description
    }
    this.notesService.updateNote(Note).subscribe((serve)=>{
      console.log(serve);
    },
    (error)=>{
      console.log(error);
    });
  }

}
