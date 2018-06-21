import {Injectable} from '@angular/core';

//The http client
import {HttpClient} from '@angular/common/http';

//RxJS stuff
import { catchError, map, tap } from 'rxjs/operators';

//API Routes
/**
/scrape/trash
/scrape/best
**/


@Injectable()

export class WaifuApi {

  //The api endpoint for the waifus
  private api_endpoint:string = "https://waifu-parser.glitch.me";

  constructor(private http:HttpClient) {

  }

  private handleError(error:string, data:any) {
    console.log("Error for " + error);
  }

  //Get the current best waifus
  getWaifus() {

    console.log(this.http);

    this.http.get('https://waifu-parser.glitch.com/scrape/best')
      .pipe(
        tap(data => {
          console.log("DATA");
        }),
        catchError(this.handleError('getWaifus',[]));
      )

  }

}
