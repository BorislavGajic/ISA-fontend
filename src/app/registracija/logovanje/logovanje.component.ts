import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../service/registracijaService/authentication.service';
import {LogovanjeServiceService} from '../../service/logovanjeService/logovanje-service.service';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  success: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginService: LogovanjeServiceService
  ) {
    /*// redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }*/
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
 /*   // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // show success message on registration
    if (this.route.snapshot.queryParams['registered']) {
      this.success = 'Registration successful';
    }
  */}


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.error = null;
    this.success = null;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/registracija']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
