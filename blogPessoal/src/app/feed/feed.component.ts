import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  myimage: string = "assets/imagem/IMG_2116.jpg";


  constructor() { }

  ngOnInit(): void {
  }


}

