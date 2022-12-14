import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authservice:AuthService) { }

  ngOnInit(): void {
    
  }

  logIn(){
    this.authservice.login()
    this.router.navigate(['/home'])

  }

}
