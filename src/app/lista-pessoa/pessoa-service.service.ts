import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomesPessoas: string[] = ['João', 'Maria', 'Angular 2', 'Tiago'];

  constructor() { }

  getPessoas(): string[] {
    return this.nomesPessoas;
  } 

  setPessoa(nome: string): void {
    this.nomesPessoas.push(nome);
  }
}
