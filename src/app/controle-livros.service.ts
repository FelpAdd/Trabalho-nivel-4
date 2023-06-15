import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { ControleEditoraService } from './controle-editora.service';

@Injectable()
export class ControleLivrosService {
  livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos(OO) e Java.', autores: ['Bert Bates. Kathy Sierra.'] },
    { codigo: 2, codEditora: 2, titulo: 'Java, como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.', autores: ['Paul Deitel. Harvey Deitel'] },
  ];

  constructor(private controleEditoraService: ControleEditoraService) {}

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

  obterNomeEditora(codEditora: number): string {
    return this.controleEditoraService.obterNomeEditora(codEditora);
  }
}
