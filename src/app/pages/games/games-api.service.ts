import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamesDto } from './games';
import { find, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {


  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`/server/games`);
  }

  getById(id) {
    return this.getAll().pipe(
      find((games: Array<any>) => games.find(g => g.id === id)),
      map(g => g[0])
    )
  }

  create(game: GamesDto) {

  }
}
