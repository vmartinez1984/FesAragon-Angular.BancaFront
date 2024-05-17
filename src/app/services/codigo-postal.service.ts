import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodigoPostalDto } from '../codigo-postal';

@Injectable({
  providedIn: 'root'
})
export class CodigoPostalService {
  obtenerCodigoPostal(codigoPostal: string): Observable<CodigoPostalDto[]> {
    return this.httpClient.get<CodigoPostalDto[]>(this.url + codigoPostal)
  }
  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8081/index.php/api/CodigosPostales/"
}
