import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  serverContext = environment.serverContext;

  constructor( private http :HttpClient,
    
   ) { }

  signupUser(payload){
   
    console.log("Server path :"+this.serverContext)

    console.log("Data load : "+JSON.stringify(payload));
    const link=`${this.serverContext}/user/`;
    console.log("Server path :"+link);
    
   return this.http.post<any>(link,payload)
 
   


  }


  removeActionProperty(payload) {
    delete payload.action;
    return payload;
  }

 
}

