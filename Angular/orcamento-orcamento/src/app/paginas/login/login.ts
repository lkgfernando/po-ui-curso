import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  public login: string = '';
  public pass: string = '';
  public loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
  });

  public confirmLogin(): void {
    console.log(`${this.login} - ${this.pass}`);
  }

  public submitLogin(fl: NgForm) {
    console.log(`Dados do login`, fl.form.value);
  }

  public submitLogin2(): void {
    console.log('Formulario', this.loginForm.value);
  }
}
