import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";
import {QueryDocumentSnapshot} from "@angular/fire/compat/firestore";
import {FormControl} from "@angular/forms";
import {distinct, filter} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  movies: QueryDocumentSnapshot<Movie>[] = [];
  searchControl = new FormControl();
  constructor(
    private moviesService: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.moviesService.find().subscribe(value => {
      this.movies = value.docs;
    });

    this.searchControl.valueChanges.subscribe(value => {
      this.moviesService.search(value).subscribe(value => {
        this.movies = value.docs;
        console.log(value.docs.length);
      });
    });
  }
}
