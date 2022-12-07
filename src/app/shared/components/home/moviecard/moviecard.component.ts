import { Component, Input, OnInit } from '@angular/core';
import { Iresult } from 'src/app/shared/model/model';
import { HomeService } from 'src/app/shared/service/home.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  @Input() movie!:Iresult;
  IMG_PATH!:any;
  
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.IMG_PATH = this.homeService.IMG_PATH
  }
}
