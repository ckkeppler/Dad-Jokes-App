import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JokeService } from '../joke.service';

@Component({
  selector: 'app-saved-jokes',
  templateUrl: './saved-jokes.component.html',
  styleUrls: ['./saved-jokes.component.scss'],
})
export class SavedJokesComponent implements OnInit {
  jokes? = [];
  constructor(private jokeService: JokeService, private router: Router) {}

  ngOnInit() {
    if (this.jokes) this.getJokes();
  }

  getJokes() {
    this.jokeService.getSavedJokes().subscribe((dadJokes) => {
      this.jokes = Object.values(dadJokes);
      console.log(this.jokes);
    });
  }

  deleteJokes() {
    this.jokeService.deleteSavedJokes().subscribe(() => {
      this.jokes = [];
    });

    setTimeout(() => {
      this.router.navigateByUrl('get-joke');
    }, 1000);
  }
}
