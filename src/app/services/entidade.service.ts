import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntidadeInput } from '../modules/entidadeInput';

import { backend } from '../util/backend';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService {

  constructor(private http: HttpClient) { 
    
  }

  public BuscarTodos():Observable<any>{
      return this.http.get(backend.baseEntidades())
  }

  public BuscarPorId(id:number): Observable<any>{
    return this.http.get(backend.baseEntidades() + "/" + id )
  }

  public DeletarPorId(id : number): Observable<any>{
    return this.http.delete(backend.baseEntidades() + "/" + id)
  } 

  public Inserir(entidadeInput : EntidadeInput) : Observable<any>{
     return this.http.post(backend.baseEntidades(),entidadeInput)
  }

  public fazerAtividade(id:number) : Observable<any>{
    return this.http.put(backend.baseEntidades() + "/" + id + "/feita",null)
  }
  public desfazerAtividade(id:number) : Observable<any>{
    return this.http.delete(backend.baseEntidades() + "/" + id + "/feita")
  }
  public buscarPorNome(nome:string) : Observable<any>{
    return this.http.get(backend.baseEntidades() + "?nome=" + nome )
  }
}
