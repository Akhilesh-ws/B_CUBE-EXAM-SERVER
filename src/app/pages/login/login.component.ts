import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/service/service.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  public loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private tokenStorage: TokenStorageService, private http :HttpClient, private engageService: ServiceService,
    private router:Router) { }
    

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles; 
    }
    this.loginForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  login(){
    console.log("User Details"+JSON.stringify(this.loginForm.value));
    if(this.loginForm.value.username=='' ||this.loginForm.value.username==null){
      alert("Enter username")
    }else{
    this.engageService.loginUser(this.loginForm.value).subscribe(
      (data) => {
        console.log("data "+JSON.stringify(data.accessToken))
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log("token Storage data"+JSON.stringify(data.accessToken))

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log("user role "+this.roles )
         this.reloadPage();
      
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
       
      }
    );
  }
  }
  reloadPage(): void {
    window.location.reload();
  }




 
 resetForm(){
    this.loginForm.reset();
 
  }
}


