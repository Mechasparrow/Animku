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

  //Get the trashy waifus
  getTrashWaifus() {

    let that = this;

    var waifu_promise = new Promise((resolve, reject) => {
      this.http.get(this.api_endpoint + '/scrape/trash')
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


  //Generates a waifu matrix;
  public generateWaifuMatrix(waifus:Waifu[], cols:number){

    var waifu_rows_cnt:number = Math.ceil(waifus.length / cols);

    var waifus_stack:Waifu[] = waifus.slice();

    var waifus_matrix:Waifu[][] = [];

    for (var i = 0; i < waifu_rows_cnt; i++) {

      var waifu_small_list:Waifu[] = [];

      for (var c = 0; c < cols; c++) {
        if (waifus_stack.length > 0) {
          var removed_waifu:Waifu = waifus_stack.pop();

          waifu_small_list.push(removed_waifu);
        }
      }

      waifus_matrix.push(waifu_small_list);


    }

    return waifus_matrix;

  }

  //Returns a random waifus
  getRandomWaifu(mode:string) {

    let that = this;

    var waifu_promise = new Promise ((resolve, reject) => {

      var waifus_promise;

      switch (mode) {
        case 'best':
          waifus_promise = that.getBestWaifus();
          break;
        case 'trash':
          waifus_promise = that.getTrashWaifus();
          break;
      }

      waifus_promise
        .then (function (waifus:Waifu[]) {
          var random_waifu:Waifu = waifus[Math.floor(Math.random()*waifus.length)];
          resolve(random_waifu);
        }).catch (function (error) {
          reject(error);
        });
    })

    return waifu_promise;

  }


}
