import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/postagem';
import { PostagemService } from '../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  myimage: string = "assets/imagem/IMG_2116.jpg";
  postagem: Postagem = new Postagem
  delOk: boolean = false
  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id: number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o erro`)
    })

  }

  btnSim() {
    this.postagemService.deletePostagem(this.postagem.id).subscribe(() => {
      this.delOk = true
      this.router.navigate(['/feed'])
      localStorage.setItem("delOk", this.delOk.toString())
    })


  }

  btnNao() {
    this.router.navigate(["/feed"])
  }
}

