import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ClienteDto, ClienteDtoIn } from '../cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  obtenerPorId(clienteId: string): Observable<ClienteDto> {
    return this.httpClient.get<ClienteDto>(this.url + "/" + clienteId)
  }

  obtenerTodos(): Observable<ClienteDto[]> {
    return this.httpClient.get<ClienteDto[]>(this.url)
  }

  agregar(cliente: ClienteDtoIn): Observable<any> {
    return this.httpClient.post(this.url, cliente)
  }

  constructor(private httpClient: HttpClient) { }

  private url = environment.apiUrl + "Clientes"
}
