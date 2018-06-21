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
    this.rando_waifu = <Waifu>{
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls08Zz-1F61zYqYoc_1IR2f--OmjaMDPKS7HJPmU2HZECJlsECQ"
    };
  }

  ngOnInit() {
    console.log("getting waifus..");
    this.api.getBestWaifus();
  }

}
