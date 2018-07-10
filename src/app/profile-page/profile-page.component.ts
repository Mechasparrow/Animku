import { Component, OnInit } from '@angular/core';

//User Profile Database;
import {ProfileDatabase} from '../../../lib/local_db/profile_db';

//Import the profile object
import {Profile} from '../../../models/Profile';
import {Waifu} from '../../../models/Waifu';
import {Entertainment} from '../../../models/Entertainment';
import {Anime} from '../../../models/Anime';

//Import the routing libs
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [ProfileDatabase]
})
export class ProfilePageComponent implements OnInit {

  public user_profile:Profile = Profile.emptyProfile();

  constructor(
      private database:ProfileDatabase,
      private route: ActivatedRoute,
      private router:Router
  ) { }

  ngOnInit() {
    this.refreshProfile();
  }

  //Refresh the profile
  public refreshProfile() {
    let that = this;

    this.database.getProfile().then (function (profile:Profile) {
      that.user_profile = profile;
      console.log(that.user_profile);
    }).catch (function (error) {
      console.log(error);
    })
  }

  public editProfile() {
    this.router.navigate(['/edit-profile'])
  }

}
