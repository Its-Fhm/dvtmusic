import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import {LoaderService} from '../loader/loader.service';


@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private httpClient: HttpClient, public loaderService: LoaderService) { }
  startSearch(q: string): Observable<any> {
    const options = {
      params: { q: q }
    };
    return this.httpClient.get<any>('/api/search/artist', options).pipe(
      map((response) => {
        return response
      }),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    )
  }
  handleError(error: HttpErrorResponse): any {
    throw new Error('throw error.');
  }

  getAlbums(q: string): Observable<any> {
    const options = {
      params: { q: q }
    };
    return this.httpClient.get<any>('/api/album', options)
  }


  getArtist(q: string): Observable<any> {
    return this.httpClient.get<any>('/api/artist/'+ q)
  }


  getArtistAlbum(q: string): Observable<any> {
    return this.httpClient.get<any>('/api/artist/'+ q + '/albums')
  }

  artistTopTracks(q: string): Observable<any>{
    return this.httpClient.get('/api/artist/' + q + '/top?limit=5');
  }

}
