import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iresult } from '../../model/model';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.scss']
})
export class SinglemovieComponent implements OnInit {
movieDetails!: Iresult ;
imgpath!:any;
  movieId:number= 338947;
  constructor(private route:ActivatedRoute,private router:Router, private homeservice:HomeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.movieId = +params['id']
      console.log(this.movieId);
      this.movieDetails =  this.homeservice.getMovie(this.movieId)!
    })
     this.imgpath = this.homeservice.IMG_PATH
  }

  gotohome(){

    this.router.navigate(['home'])
  }
}
