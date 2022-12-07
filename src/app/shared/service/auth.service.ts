import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginStatus:boolean=false;
  constructor() { }
  
isCanActiv():Promise<boolean>{
  return new Promise ((resolve, reject) =>{
     setTimeout(() => {
      this.loginStatus = localStorage.getItem('token') ? true : false;
      resolve(this.loginStatus)
     }, 20);
  })
}

login(){
  this.loginStatus = true
  let token = 'Jwt token'
  localStorage.setItem( 'token', token)
}

logout(){
  this.loginStatus = false
  localStorage.removeItem('token')
}

}
