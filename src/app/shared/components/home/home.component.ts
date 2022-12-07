import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iresult } from '../../model/model';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies!:Iresult[];
  constructor(private homeservice: HomeService, private router:Router) { }

  ngOnInit(): void {
    this.movies = this.homeservice.getAllMovies() 
    // this.router.navigate(['/movie'])
  }

  logout(){
    this.router.navigate([''])
  }
}
