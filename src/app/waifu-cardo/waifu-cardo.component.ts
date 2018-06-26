import { Component, OnInit, Input } from '@angular/core';

//Import the Waifu Model
import {Waifu} from '../../../models/Waifu';

//Import the routing libs
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'waifu-cardo',
  templateUrl: './waifu-cardo.component.html',
  styleUrls: ['./waifu-cardo.component.css']
})
export class WaifuCardoComponent implements OnInit {

  @Input() waifu:Waifu;

  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) {

  }

  //Get the image of the waifu
  public getWaifuImage() {

    return (this.waifu.image_url || "");

  }

  //route to waifu view page
  public viewWaifu() {

    let navExtras: NavigationExtras = {
      queryParams: {
        'waifu': JSON.stringify(this.waifu)
      }
    }


    this.router.navigate(['/view-waifu'], navExtras);

  }

  ngOnInit() {
     this.img_url = this.getWaifuImage();
  }

}
