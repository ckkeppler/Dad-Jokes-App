import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Joke {
  headerId: string;
  id: string;
  joke: string;
  status?: number;
}

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  jokes: Joke[] = [];
  constructor(private http: HttpClient) {}

  fetchJoke() {
    return this.http.get<Joke>('https://icanhazdadjoke.com/', {
      headers: new HttpHeaders({ Accept: 'application/json' }),
    });
  }

  postJoke(joke: Joke) {
    return this.http.post<Joke>(
      'https://dad-jokes-607af-default-rtdb.firebaseio.com/jokes.json',
      joke
    );
  }

  getSavedJokes() {
    return this.http.get(
      'https://dad-jokes-607af-default-rtdb.firebaseio.com/jokes.json'
    );
  }

  deleteSavedJokes() {
    return this.http.delete(
      'https://dad-jokes-607af-default-rtdb.firebaseio.com/jokes.json'
    );
  }
}
