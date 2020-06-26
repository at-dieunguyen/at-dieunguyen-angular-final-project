import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
  * Get api
  * @param url : path from ENDPOINT
  * @param params : ex: {key: value}
  */
  get(url: string, params?: any): Observable<any> {
    return this.http.get(url, { params: params }).pipe(
      catchError(this.handleError)
    );
  }

  getId(url: string, id: number): Observable<any> {
    return this.http.get(url + id)
  }
  /**
  * Post api
  * @param url : path from ENDPOINT
  * @param params : ex: {key: value}
  */

  post(url: string, params: any) {
    const axios = require('axios');
    axios.post(url, params).catch(error => {
      console.log(error);
    });
  }


  /**
  * Put api
  * @param url : path from ENDPOINT
  * @param params : ex: {key: value}
  */
  put(url: string, params: any) {
    const axios = require('axios');
    axios.put(url, params).catch(error => {
      console.log(error);
    });
  }
  putFa(url: string, params: any) {
    const axios = require('axios');
    params.arrFavourite = JSON.stringify(params.arrFavourite);
    console.log(url, JSON.stringify(params.arrFavourite));

    axios.put(url, params).catch(error => {
      console.log(error);
    });
  }
  /**
  * Get file from assets folder
  * @param url : path from assets folder
  */
  getAssets(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
  * Get api with full response
  * include: headers, body, ...
  * @param url : string
  */
  getConfigResponse(url: string): Observable<HttpResponse<any>> {
    return this.http.get(url, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }

  /**
  * Handle error from Response
  * @param error: any
  */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
