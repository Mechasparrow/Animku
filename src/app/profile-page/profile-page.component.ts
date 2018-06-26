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

  //KILLTHISCODE this is for testing purposes only
  public testProfileCase() {

    var test_profile:Profile = new Profile(
      "Michael",
      "Michael is a student who has too much time on his hands, so he watchs anime and codes stuff. He also likes Steins;Gate",
      null,
      null
    )

    let that = this;

    this.database.updateProfile(test_profile).then (function (data:Profile) {
      that.refreshProfile();
    }).catch (function (err) {
      console.log(err);
    })

  }

}
