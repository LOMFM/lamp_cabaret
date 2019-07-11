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
  constructor(
    private router: Router
  ){

  }

  ngOnInit(){

  }

  login(){
    if( this.user.email == "admin@gmail.com" && this.user.password == "admin" ){
      console.log("logged in");
      this.router.navigate(['/manager'])
    }
  }
}
