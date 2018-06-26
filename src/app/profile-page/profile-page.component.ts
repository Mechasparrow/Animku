import { Component, OnInit } from '@angular/core';

//User Profile Database;
import {ProfileDatabase} from '../../../lib/local_db/profile_db';

//Import the profile object
import {Profile} from '../../../models/Profile';
import {Waifu} from '../../../models/Waifu';
import {Entertainment} from '../../../models/Entertainment';
import {Anime} from '../../../models/Anime';

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
      new Waifu(
        "Maho Hiyajo",
        "Maho Hiyajo is Makise Kurisus senior university associate at the Institute of Neuroscience at Victor Chondria University in the United States. She works as a research assistant to Professor Alexis Leskinen and specializes in neuroscience and artificial intelligence",
        "https://mywaifulist.s3-us-west-1.amazonaws.com/waifus/1677/49913de504de4c97f5aa796b81d9e1d14d1ba4fd1680457a2400a7642c82c962_thumb.png",
        "maho-hiyajo"
      ),
      new Anime(
        "Steins;Gate",
        'The self-proclaimed mad scientist Rintarou Okabe r…ing prospective "future gadgets" with fellow l...',
        "https://myanimelist.cdn-dena.com/r/100x140/images/anime/5/73199.jpg?s=8fe506c27a2eba32611561a2dd116389",
        "https://myanimelist.net/anime/9253/Steins_Gate"
      )
    )

    let that = this;

    this.database.updateProfile(test_profile).then (function (data:Profile) {
      that.refreshProfile();
    }).catch (function (err) {
      console.log(err);
    })

  }

}
