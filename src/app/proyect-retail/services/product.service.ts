import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Utils } from 'src/app/shared/utils';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
  };

  getListProduct(): any {
    let url = `${Utils.url_dev}/listar`;

    return this.http
      .get(url, {
        headers: this.headers,
      })
      .pipe(map((data) => data))
      .pipe(catchError((err) => of(err)));
  }

}
