import { Component, OnInit, Input } from '@angular/core';

//Import the Waifu Model
import {Waifu} from '../../../models/Waifu';

@Component({
  selector: 'waifu-cardo',
  templateUrl: './waifu-cardo.component.html',
  styleUrls: ['./waifu-cardo.component.css']
})
export class WaifuCardoComponent implements OnInit {

  @Input() waifu:Waifu;

  constructor() {

  }

  //Get the image of the waifu
  public getWaifuImage() {

    return (this.waifu.image_url || "");

  }

  //TODO route to waifu view page
  public viewWaifu() {
    console.log("view waifu")
  }

  ngOnInit() {
     this.img_url = this.getWaifuImage();
  }

}
