import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly MOVIES = 'movies';

  constructor(
    private store: AngularFirestore
  ) { }

  add(movie: Movie) {
    return this.store.collection(this.MOVIES).add(movie);
  }

  find() {
    return this.store.collection<Movie>(this.MOVIES).get();
  }
}
