import { Component } from '@angular/core';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro'; 

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  livros: Livro[] = [];

  constructor(private servLivros: ControleLivrosService) {}

  ngOnInit(): void {
    this.livros = this.servLivros.obterLivros();
  }

  excluirLivro(codigo: number): void {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNomeEditora(codEditora: number): string {
    return this.servLivros.obterNomeEditora(codEditora);
  }
}
