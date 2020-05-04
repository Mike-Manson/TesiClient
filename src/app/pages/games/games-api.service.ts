import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesDto } from './games';
import { find, map, tap, mergeAll, mergeMap, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {


  constructor(
    private router: Router,
    private http: HttpClient
    ) {}

  getAll(filterOptions?) {
    return this.http.get(`/server/games`);
  }

  getById(id) {
    return this.http.get(`/server/game?id=${id}`);
  }

  create(game: GamesDto) {
    const g = {
      ...game,
      id: Math.floor(Math.random() * 1000 + 1000)
    }

    this.http.post(`/server/games`, g).subscribe((res: GamesDto) => {
      this.router.navigate(['games', res.id]);
    });
  }
}
