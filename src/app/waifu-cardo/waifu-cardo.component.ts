import { Component, OnInit, Input } from '@angular/core';

//Import the Waifu Model
import {Waifu} from '../../../models/Waifu';
import {Profile} from '../../../models/Profile';

//Import the routing libs
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {NavigationExtras} from '@angular/router';

//User Profile Database;
import {ProfileDatabase} from '../../../lib/local_db/profile_db';

@Component({
  selector: 'waifu-cardo',
  templateUrl: './waifu-cardo.component.html',
  styleUrls: ['./waifu-cardo.component.css'],
  providers: [ProfileDatabase]
})
export class WaifuCardoComponent implements OnInit {

  @Input() waifu:Waifu;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private profile_db:ProfileDatabase
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

  public setFavWaifu() {

    let that = this;

    that.profile_db.getProfile().then (function (profile:Profile) {

      var new_prof:Profile = Object.assign( Object.create( Object.getPrototypeOf(profile)), profile)

      new_prof.fav_waifu = that.waifu;

      return that.profile_db.updateProfile(new_prof);

    }).then (function (updatedProf:Profile) {
      console.log("updated favorite waifu!");
    })

  }

  ngOnInit() {

  }

}
