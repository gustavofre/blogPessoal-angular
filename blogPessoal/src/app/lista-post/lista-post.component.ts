import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  key = 'data'
  reverse = true

  myimage: string = "assets/imagem/IMG_2116.jpg";

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];


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
