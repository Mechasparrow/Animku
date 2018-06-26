import { Component, OnInit } from '@angular/core';

//User Profile Database;
import {ProfileDatabase} from '../../../lib/local_db/profile_db';

//Import the profile object
import {Profile} from '../../../models/Profile';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [ProfileDatabase]
})
export class ProfilePageComponent implements OnInit {

  public user_profile:Profile;

  constructor(
    private database:ProfileDatabase
  ) { }

  ngOnInit() {

    let that = this;

    this.database.getProfile().then (function (profile:Profile) {
      that.user_profile = profile;
      console.log(that.user_profile);
    }).catch (function (error) {
      console.log(error);
    })

  }

}
