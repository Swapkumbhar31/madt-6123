import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";
import {QueryDocumentSnapshot} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  movies: QueryDocumentSnapshot<Movie>[] = [];

  constructor(
    private moviesService: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.moviesService.find().subscribe(value => {
      this.movies = value.docs;
    })
  }
}
