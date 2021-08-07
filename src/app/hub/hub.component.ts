import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {
  formulario: FormGroup

  @Output() buscarPorNome: EventEmitter<string> = new EventEmitter<string>()
  @Output() buscarTodos: EventEmitter<void> = new EventEmitter()

  constructor(private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(1)]]
    })
  }

  ngOnInit(): void {

  }
  public buscar(): void {
    if (this.formulario.valid) {
      this.buscarPorNome.emit(this.formulario.get('nome')?.value)
    } else {
      this.buscarTodos.emit()
    }
  }

}
