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

  public img_url:string;

  constructor() {

  }

  public getWaifuImage() {

    return (this.waifu.image_url || "");

  }
  ngOnInit() {
     this.img_url = this.getWaifuImage();
  }

}
