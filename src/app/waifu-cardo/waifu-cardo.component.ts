import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'waifu-cardo',
  templateUrl: './waifu-cardo.component.html',
  styleUrls: ['./waifu-cardo.component.css']
})
export class WaifuCardoComponent implements OnInit {

  public img_url:string = "";

  private img_links:string[] = [
    "https://mywaifulist.s3-us-west-1.amazonaws.com/waifus/35/351a666c587e5c97eaa1163590afe50b91925c4e819d23dd50b0490eae807e24_thumb.jpeg",
    "https://mywaifulist.s3-us-west-1.amazonaws.com/waifus/41/f86c51782fb88102efb351e51a8d770695694210a3ce63ddcef360a9b2ce98af_thumb.jpeg",
    "https://mywaifulist.s3-us-west-1.amazonaws.com/waifus/58/28d92f7d4d2e16cfec7d4a7523c90ca5f28908e9ee1b67148bd71e4e998f5a9c_thumb.jpeg",
    "https://mywaifulist.s3-us-west-1.amazonaws.com/waifus/554/f32c361e0de45b34d0f38e2d65f065ea4242f1bdc8ccb7d591a6a42d28295394_thumb.jpeg"
  ]

  constructor() {
    this.img_url = this.getWaifuImage();
  }

  public getWaifuImage() {

    var desired_waifu = this.img_links[Math.floor(Math.random()*this.img_links.length)];

    return desired_waifu;

  }
  ngOnInit() {
  }

}
