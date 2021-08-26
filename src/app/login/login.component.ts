import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nameForm: FormGroup;
  userName: any;

  onSubmit(form: any) {
    console.log('you submitted value: ', form);
  }

  log(val) {
    console.log(val);
  }

  constructor(private formBuilder: FormBuilder) { 
    this.nameForm = formBuilder.group({
      'userName': [null]
    });
    this.userName = this.nameForm.controls['userName'];
  }

  ngOnInit(): void {
  }

}
