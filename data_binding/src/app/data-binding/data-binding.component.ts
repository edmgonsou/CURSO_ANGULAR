import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://loremflickr.com/640/360';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  descricao: string = '';

  nome: string = 'abc';
  pessoa: any = {
    nome: 'Pedro',
    idade: 21
  }

  getValor(): number {
    return 1;
  };

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  descInput(evento: string){
    this.descricao = evento;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
