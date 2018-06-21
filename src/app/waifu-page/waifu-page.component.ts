import { Component, OnInit } from '@angular/core';

//Import the Waifu Api
import {WaifuApi} from '../../../lib/api/WaifuApi';

//Import the Waifu Model
import {Waifu} from '../../../models/Waifu';

@Component({
  selector: 'app-waifu-page',
  templateUrl: './waifu-page.component.html',
  styleUrls: ['./waifu-page.component.css'],
  providers: [WaifuApi]
})
export class WaifuPageComponent implements OnInit {


  public random_waifus:Waifu[];

  constructor(private api:WaifuApi) {
  }

  ngOnInit() {
    console.log("getting waifus..");

    let that = this;

    var promises = [];

    for (var i = 0; i < 3; i ++) {
      promises.push(this.api.getRandomWaifu());
    }

    Promise.all(promises).then (function (random_waifus:Waifu[]) {
      that.random_waifus = random_waifus;
    }).catch (function (err) {
      console.log(err);
    })

  }

}
