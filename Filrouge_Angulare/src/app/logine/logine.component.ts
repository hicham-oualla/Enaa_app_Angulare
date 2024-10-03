import {Component, OnInit} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JWT} from "../Model/jwt";

@Component({
  selector: 'app-logine',
  templateUrl: './logine.component.html',
  styleUrls: ['./logine.component.css']
})
export class LogineComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    console.log('Form submitted:', this.loginForm.value);

    this.service.login(this.loginForm.value).subscribe({
      next: (response: JWT) => {
        console.log('Login successful:', response);
        const jwtToken = response.access_token;
        const userId = response.character_id;

        localStorage.setItem('access_token', jwtToken);
        localStorage.setItem('character_id', userId.toString());
        this.router.navigate(['']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Handle login error (e.g., show error message to user)
      }
    });
  }
}
