import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Entidade } from '../modules/entidade';

import { EntidadeService } from '../services/entidade.service';

@Component({
  selector: 'app-grig',
  templateUrl: './grig.component.html',
  styleUrls: ['./grig.component.css']
})

export class GrigComponent implements OnInit {
  constructor(private entidadeService : EntidadeService){
  }
  @Output() buscarTodos : EventEmitter<void> = new EventEmitter()
  @Input() entidades : Entidade[]=[]
  ngOnInit(): void {

    
  }
  public DeletarPorId(id : number): void{
    if(confirm("Tem certeza que deseja deletar")){
      this.entidadeService.DeletarPorId(id).subscribe(data => {
       this.buscarTodos.emit()
      })
    }
    
  } 
  /**
   * fazerAtividade
   */
  public fazerAtividade(id : number) : void {
    this.entidadeService.fazerAtividade(id).subscribe(data =>{
      this.buscarTodos.emit()
    })
    
  }

  public desfazerAtividade(id : number) : void {
    this.entidadeService.desfazerAtividade(id).subscribe(data =>{
      this.buscarTodos.emit()
    })
    
  }


}
