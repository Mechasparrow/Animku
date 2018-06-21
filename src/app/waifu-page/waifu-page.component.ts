import { Component, OnInit } from '@angular/core';

//Import the Waifu Api
import {WaifuApi} from '../../../lib/api/WaifuApi';

@Component({
  selector: 'app-waifu-page',
  templateUrl: './waifu-page.component.html',
  styleUrls: ['./waifu-page.component.css'],
  providers: [WaifuApi]
})
export class WaifuPageComponent implements OnInit {

  constructor(private api:WaifuApi) { }

  ngOnInit() {
    console.log("getting waifus..");
    this.api.getWaifus();
  }

}
