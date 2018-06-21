import {Injectable} from '@angular/core';

//The http client
import {HttpClient} from '@angular/common/http';

//RxJS stuff
import { catchError, map, tap } from 'rxjs/operators';

//Waifu Model
import {Waifu} from '../../models/Waifu';

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

  //Parses the raw waifu JSON data;
  private parseRawWaifu(raw_waifu:any) {

    return (<Waifu>{
      image_url: raw_waifu["display_picture"],
      name: raw_waifu["name"],
      description: raw_waifu["description"]
    });

  }

  //Get the current best waifus
  getBestWaifus() {

    let that = this;

    var waifu_promise = new Promise((resolve, reject) => {
      this.http.get(this.api_endpoint + '/scrape/best')
        .toPromise()
        .then ((data) => {
          var waifus:Waifu[] = (<any>data).map((raw_waifu) => {
            return that.parseRawWaifu(raw_waifu);
          });
          resolve(waifus);

        })
        .catch ((error) => {
          reject(error);
        })
    })

    return waifu_promise;

  }

}
