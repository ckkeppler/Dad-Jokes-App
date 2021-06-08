import { Component, OnInit } from '@angular/core';
import { Joke, JokeService } from '../joke.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-joke',
  templateUrl: './get-joke.component.html',
  styleUrls: ['./get-joke.component.scss'],
})
export class GetJokeComponent implements OnInit {
  dadJoke?: Joke;
  joke: string;
  query: boolean;
  saved: boolean;

  constructor(
    private jokeService: JokeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  getJoke() {
    this.jokeService.fetchJoke().subscribe(
      (res: Joke) => {
        this.dadJoke = res;
        this.joke = this.dadJoke.joke;
      },
      (err) => {
        console.log(err);
      }
    );
    this.query = true;
    this.saved = false;
  }

  saveJoke() {
    this.saved = true;
    if (!this.query) {
      this.openSnackBar('Get a joke first!');
    } else {
      this.jokeService.postJoke(this.dadJoke).subscribe(
        () => {
          console.log(this.dadJoke.joke);
        },
        (err) => {
          console.log(err);
        }
      );

      this.openSnackBar('Joke saved!');
    }
  }

  openSnackBar(message: string) {
    let snackBarRef = this.snackBar.open(message);
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 2000);
  }
}
