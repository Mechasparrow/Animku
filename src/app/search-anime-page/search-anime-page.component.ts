import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-anime-page',
  templateUrl: './search-anime-page.component.html',
  styleUrls: ['./search-anime-page.component.css']
})
export class SearchAnimePageComponent implements OnInit {

  constructor() { }

  public anime_query:string = "";

  ngOnInit() {

  }

  searchAnime() {
    alert(this.anime_query);
  }

}
