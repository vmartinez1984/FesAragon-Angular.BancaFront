import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodigoPostalDto } from '../codigo-postal';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CodigoPostalService {
  obtenerCodigoPostal(codigoPostal: string): Observable<CodigoPostalDto[]> {
    return this.httpClient.get<CodigoPostalDto[]>(this.url + codigoPostal)
  }
  constructor(private httpClient: HttpClient) { }

  private url = environment.apiDeCodigosPostales + "CodigosPostales/"
}
