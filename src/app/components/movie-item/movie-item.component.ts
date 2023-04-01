import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styles: [
  ]
})
export class MovieItemComponent implements OnInit {
  @Input() movie?: Movie;
  constructor() { }

  ngOnInit(): void {
  }

  notFoundError(event: any) {
    event.target.src = "/assets/not-found.webp";
  }
}
