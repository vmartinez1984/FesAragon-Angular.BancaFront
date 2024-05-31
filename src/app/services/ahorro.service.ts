import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Ahorro, AhorroDtoIn, MovimientoDtoIn } from '../interfaces/ahorro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AhorroService {
  depositar(ahorroId: string, movimiento: MovimientoDtoIn): Observable<any> {
    return this.httpClient.post<any>(this.url + "/" + ahorroId + "/depositos", movimiento)
  }

  agregar(ahorroDtoIn: AhorroDtoIn): Observable<any> {
    return this.httpClient.post(this.url, ahorroDtoIn)
  }

  obtenerTodosPorClienteId(clietneId: string): Observable<Ahorro[]> {
    return this.httpClient.get<Ahorro[]>(this.url + "/clientes/" + clietneId)
  }

  constructor(private httpClient: HttpClient) { }

  private url = environment.ahorrosApi + "ahorros"
}
