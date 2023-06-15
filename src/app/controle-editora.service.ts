import { Injectable } from '@angular/core';
import { Editora }  from './editora';

@Injectable()
export class ControleEditoraService {
  editoras: { codEditora: number; nome: string }[] = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    
  ];

  getEditoras(): { codEditora: number; nome: string }[] {
    return this.editoras;
  }

  obterNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}

export default ControleEditoraService;