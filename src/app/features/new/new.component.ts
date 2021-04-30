import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@shared/models/user.model';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public user: User = {
    email: 'juanfer@gmil.com',
    name: {
      title: 'mister',
      first: 'Juan',
      last: 'Fernandez',
    }
  };

  public fields = ['title', 'first', 'last'];

  constructor(private fb: FormBuilder) {}

  public userForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    name: this.fb.group({})
  });

  public ngOnInit(): void {
    const nameGroup = this.fb.group({});
    this.fields.forEach(field => {
      nameGroup.addControl(field, new FormControl(''))
    });

    this.userForm.controls.name = nameGroup;

  }

  loadData() {
    this.userForm.get('email').setValue('perrete');
  }

}
