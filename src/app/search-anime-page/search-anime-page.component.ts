import { Component, OnInit } from '@angular/core';

//Import the Anime Api
import {AnimeApi} from '../../../lib/api/AnimeApi';

@Component({
  selector: 'app-search-anime-page',
  templateUrl: './search-anime-page.component.html',
  styleUrls: ['./search-anime-page.component.css'],
  providers: [AnimeApi]
})
export class SearchAnimePageComponent implements OnInit {

  private test_query:string = "Steins;Gate";

  constructor(private api: AnimeApi) { }

  public anime_query:string = "";

  ngOnInit() {

  }

  //Search for the anime
  searchAnime() {

    this.api.search(this.test_query);

  }

}
