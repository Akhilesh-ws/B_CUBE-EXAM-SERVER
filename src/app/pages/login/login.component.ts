import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/service/loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private http :HttpClient, private engageService: LoginserviceService,
    private router:Router) { }
    

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      userName:[''],
      password:['']
    })
  }
  login(){
    console.log("User Details"+JSON.stringify(this.loginForm.value));
    if(this.loginForm.value.userName=='' ||this.loginForm.value.userName==null){
      alert("Enter username")
    }else{
    this.engageService.loginUser(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);

      });


      }
    }




 
 resetForm(){
    this.loginForm.reset();
  }
}


