import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Loginservice:LoginserviceService,private route :Router) { }

  ngOnInit() {

  }

login(){
//this function will take user name and password as input parameter
//and the same data will come from responsive forms after all the necessary validation.


this.Loginservice.authenticate("username","password").subscribe(token =>{
  //store in session storage
  //the key name can be as per client requiment (storing tokens with straight forward names is not recommended)
  sessionStorage.setItem("accessToken",token)
  this.route.navigate(['home']);



})



}



}
