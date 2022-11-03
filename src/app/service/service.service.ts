import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
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
    const link=`${this.serverContext}/signup`;
    console.log("Server path :"+link);
    
   return this.http.post<any>(link,payload)
  }


  removeActionProperty(payload) {
    delete payload.action;
    return payload;
  }

  loginUser(payloadData): Observable<any>{

    const link=`${this.serverContext}/signin`;
    console.log("Server path :"+link);
    return this.http.post<any>(link,payloadData)

  }

 
}

