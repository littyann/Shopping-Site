import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
    username: '',
    password: '',
    phone: '',
  };

  constructor(private apiRegister:RegisterService) {}

  registerUser() {
    this.apiRegister.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        alert("User registered successfully:")
        
      },
      (error) => {
        console.error('Error registering user:', error);
        alert("Error registering user:")
       
      }
    );
  }

}