import {Injectable} from '@angular/core';

//The http client
import {HttpClient} from '@angular/common/http';

//RxJS stuff
import { catchError, map, tap } from 'rxjs/operators';

//Model
import {Anime} from '../../models/Anime';

@Injectable()

//Interface responsible for getting us our animes

//Using the Jikan api for MyAnimeList
//https://github.com/jikan-me/jikan

export class AnimeApi {

  private api_endpoint:string = "https://api.jikan.moe"

  constructor(private http:HttpClient) {

  }

  private parseRawAnime(raw_anime:any) {

    return (<Anime>raw_anime);

  }

  //Get the animez from the search query
  search(anime_name:string) {

      console.log("running search..");

      let that = this;

      var anime_promise = new Promise((resolve, reject) => {
        that.http.get(that.api_endpoint + "/search/anime/" + anime_name + "/")
          .toPromise()
          .then ((data) => {
            var results = data['result'];
            var animes:Anime[] = <Anime[]>results.map(function (raw_anime) {
              return that.parseRawAnime(raw_anime);
            })
            resolve(animes);
          })
          .catch ((error) => {
            reject(error);
          })
      });

      return anime_promise;

  }

}
