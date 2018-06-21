import {Injectable} from '@angular/core';

//The http client
import {HttpClient} from '@angular/common/http';

//RxJS stuff
import { catchError, map, tap } from 'rxjs/operators';

//Model
import {Anime} from '../../models/Anime';

@Injectable();

//Interface responsible for getting us our animes

//Using the Jikan api for MyAnimeList
//https://github.com/jikan-me/jikan

export class AnimeApi {

  private api_endpoint:string = "https://api.jikan.moe"

  constructor() {

  }

  //Get the animez from the search query
  search(anime_name:string) {



  }

}
