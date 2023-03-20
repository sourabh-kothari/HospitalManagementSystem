import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLoggedin:boolean;

  constructor(private httpclient:HttpClient) {
    this.userLoggedin=false;
   }

   setUserLoggedin(){
    this.userLoggedin=true;
   }
   getUserLoggedin():boolean{
    return this.userLoggedin;

   }

  addUser(user:any)
  {
   return this.httpclient.post("/hospital/user",user);
  }
  getAllUser()
  {
    return this.httpclient.get("/hospital/user");
  }
  loginUser(user:User):Observable<object>{
    console.log(user);
    return this.httpclient.post("\login",user);
  }
}
