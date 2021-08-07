import { Component } from '@angular/core';
import { Entidade } from './modules/entidade';
import { EntidadeService } from './services/entidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio';
  
  entidades : Entidade[] = []
  constructor(private entidadeService : EntidadeService) { }

  ngOnInit(): void {
    this.buscarTodos()
  }

  public buscarTodos():void{
    this.entidadeService.BuscarTodos().subscribe(dados =>{
      this.entidades = dados
    })
  }

  public buscarPorNome(nome : string):void{
    this.entidadeService.buscarPorNome(nome).subscribe(buscar =>{
      this.entidades = buscar
    })
  }

  
}
