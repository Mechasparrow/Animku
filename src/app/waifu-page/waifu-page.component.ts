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

  public rando_waifu:Waifu;

  constructor(private api:WaifuApi) {
  }

  ngOnInit() {
    console.log("getting waifus..");

    let that = this;

    this.api.getRandomWaifu().then (function (random_waifu:Waifu) {
      that.rando_waifu = random_waifu;
    });

  }

}
