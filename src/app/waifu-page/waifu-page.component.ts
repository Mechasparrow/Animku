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

  public waifu_matrix:Waifu[][];

  public loading:boolean;

  constructor(private api:WaifuApi) {
  }

  ngOnInit() {
    console.log("getting waifus..");

    let that = this;

    that.loading = true;

    this.api.getBestWaifus().then (function (waifus:Waifu[]) {
      that.waifu_matrix = that.api.generateWaifuMatrix(waifus, 3);
      that.loading = false;
    })

  }

}
