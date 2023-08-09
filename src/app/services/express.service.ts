import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExpressService {
  baseUrl = ''

  constructor(
    private _http: HttpClient
  ) { }

  onGetData(data: any) {
    return this._http
      .post<any>(`${this.baseUrl}/api/Report/FetchAccounts`, data)
      .pipe(
        finalize(() => {
        })
      );
  }
}
