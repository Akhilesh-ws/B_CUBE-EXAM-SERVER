
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm !:FormGroup;
  email= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  constructor(private fb :FormBuilder,
    private engageService: ServiceService,
    private router :Router,
   
  ) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
    
      username:['',Validators.required],
      email:['',[Validators.pattern(this.email)]],
      password:['',Validators.required],
      //phone:['', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),Validators.maxLength(10)]]
    })
  
  }
  resetForm(){
    this.signupForm.reset();
  }
  signup(){
    console.log("loading data  :"+JSON.stringify(this.signupForm.value));
    if(this.signupForm.value.username== '' || this.signupForm.value.username==null){
      alert("Enter username")
      return;
      

    }else{    
   this.engageService.signupUser(this.signupForm.value).subscribe(
    (response) => {
 
      Swal.fire('Succeessfully  done !!','username :'+this.signupForm.value.username,'success')
      this.resetSignupForm();
      console.log(response);
    },
    (error) => {
     Swal.fire('Something went to wrong')
    }
  );
  }
}
  resetSignupForm() {
    this.signupForm.setValue({
      
     
      username:'',
      email:'',
      password:'',
     
  });

}}