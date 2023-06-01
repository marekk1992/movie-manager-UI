import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private baseUrl = 'http://localhost:8080/v1/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<any>(this.baseUrl)
      .pipe(map(response => response.movies))
  }

}