import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  dataSource: Movie[] = []
  displayedColumns: string[] = ['number', 'title', 'releaseYear', 'rating']
  collectionSize = 0

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  private getMovies(): void {
    this.movieService.getMovies().subscribe(
      movies => {
        this.dataSource = movies;
        this.roundRating();
        this.collectionSize = this.dataSource.length;
      }
    )
  }

  private roundRating(): void {
    for (let index = 0; index < this.dataSource.length; index++) {
      this.dataSource[index].rating = Math.round(this.dataSource[index].rating * 10) / 10
    }
  }
}
