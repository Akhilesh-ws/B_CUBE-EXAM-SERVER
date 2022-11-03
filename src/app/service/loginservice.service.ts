import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  serverContext = environment.serverContext;
  constructor(private http :HttpClient,) { }


  
  loginUser(payloadData){
    const link=`${this.serverContext}/signin`;
    return this.http.post<any>(link,payloadData)

  }
  public login(accessToken){
    localStorage.setItem('token',accessToken);
    return true;

  }
  // user is login or not

  public isloggedin(){
    let tokenStr=localStorage.getItem("token");
    console.log(tokenStr);
    if(tokenStr=='' || tokenStr==null || tokenStr==undefined){
     return false;
    }else{
      return true;
    }
  }
  //Log out   token rmove from local storage
  public logout(){
    localStorage.removeItem('token');
    return true;

  }
  //get token
  public getToken(){
    return localStorage.getItem("token");
  }
 // set user details

 public setUser(user){
  localStorage.setItem('user', JSON.stringify(user));
 }
 //get user

 public getUser(){
  let userStr=localStorage.getItem("user");
  if(userStr!= null){
    return JSON.parse(userStr);

  }else{
    this.logout();
    return null;
  }
 }
//get user role
 public getUserRole(){
  let user= this.getUser();
  return  user.authorities[0].authority;

  }

 
}
