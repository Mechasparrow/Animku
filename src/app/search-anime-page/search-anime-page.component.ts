import { Component, OnInit } from '@angular/core';

//Import the Anime Api
import {AnimeApi} from '../../../lib/api/AnimeApi';

//Import the Anime Model
import {Anime} from '../../../models/Anime';

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

  public search_results:Anime[] = [];

  ngOnInit() {

  }

  //Search for the anime
  searchAnime() {

    let that = this;

    this.api.search(this.anime_query)
      .then ((anime:Anime[]) => {
        that.search_results = anime;
        console.log(JSON.stringify(that.search_results[1]));
      })
      .catch ((error) => {
        console.log("Error: " + error);
      })

  }



}
