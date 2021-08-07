import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntidadeService } from '../services/entidade.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  formulario: FormGroup
  @Output() buscarTodos: EventEmitter<void> = new EventEmitter();

  constructor(private formBiulder: FormBuilder, private entidadeServise: EntidadeService) {
    this.formulario = this.formulario = this.formBiulder.group({
      nome: ["", [Validators.required]]
    })
  }



  ngOnInit(): void {

  }
  public Inserir(): void {
    this.entidadeServise.Inserir(this.formulario.value).subscribe(data => {
      alert("adicionado com Sucesso")
      this.formulario.reset()
      this.buscarTodos.emit()
    })
  }
}
