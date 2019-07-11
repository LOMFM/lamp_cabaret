import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: "",
    password: ""
  }

  error = "";

  globalResponse : any;
  forgotPassword = false;
  firstStep = true;

  forgotRequestFormError = "";
  resetPasswordFormError = "";

  forgot_email = "";
  reset_code = "";
  new_password = "";
  confirm_password = "";


  constructor( 
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    
  }

  socialSignIn(socialPlatform: string){
    
  }

  loginTrigger( evt ){
    if( evt.keyCode == 13 ){
      this.login();
    }
  }

  openForgotPassword() {
    this.forgotPassword = true
  }

  toStep2() {
    this.firstStep = false;
  }

  toStep1() {
    this.firstStep = true;
  }

  checkClosePopup(evt){
    if(evt.target.classList.contains("popup-scroll")){
      this.forgot_email = ""
      this.reset_code = ""
      this.forgot_email = ""
      this.new_password = ""
      this.firstStep = true;
      this.forgotPassword = false;
      this.firstStep = true;
    }
  }

  resetPasswordRequest() {
    
  }

  resetPassword() {
    if ( this.new_password != this.confirm_password ){
      this.resetPasswordFormError = "Please confirm the password."
      return;
    }
    if ( this.forgot_email == "" ) {
      this.resetPasswordFormError = "Please only enter your email in before step."
      return;
    }
    let resetPasswordData = {
      code: this.reset_code,
      email: this.forgot_email,
      password: this.new_password
    }
  }
}
