import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

  myimage: string = "assets/imagem/IMG_2116.jpg";

  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem
  alerta: boolean = false
  titulo: string

  constructor(private postagemService: PostagemService) { }

  ngOnInit(): void {
    this.findallPostagens()
    let item: string = localStorage.getItem('delOk')
    if (item == "true") {
      this.alerta = true
      localStorage.clear()

      setTimeout(() => {
        location.assign('/feed')
      }, 3000)



      location.assign('/feed')
    }
    window.scroll(0, 0)

  }

  findallPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      location.assign('/feed')

    })
  }

  pesquisarPorTitulo() {
    this.postagemService.findByTitulo(this.titulo).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
}

