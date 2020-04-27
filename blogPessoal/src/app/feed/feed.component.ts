import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  myimage: string = "assets/imagem/IMG_2116.jpg";

  listaPostagens: Postagem[]

  constructor(private postagemService: PostagemService) { }

  ngOnInit(): void {
    this.findallPostagens()
  }

  findallPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

}

