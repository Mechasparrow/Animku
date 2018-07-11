import { Component, OnInit } from '@angular/core';

//Import the Profile Local DB
import {ProfileDatabase} from '../../../lib/local_db/profile_db';

//Import the models
import {Profile} from '../../../models/Profile';

//Import routing
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css'],
  providers: [ProfileDatabase]
})
export class EditProfilePageComponent implements OnInit {

  public userProfile: Profile = Profile.emptyProfile();

  constructor(
    private profile_db:ProfileDatabase,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  //Retrieve the current user profile from local database
  ngOnInit() {

    let that = this;

    this.profile_db.getProfile().then((profile:Profile) => {
      that.userProfile = profile;
    })

  }

  //TODO implement this
  // Updates the user profile onto the local database
  public updateUserProfile() {

    let that = this;

    this.profile_db.updateProfile(this.userProfile).then (function (updatedProfile: Profile) {
      console.log("profile updated!");
      that.router.navigate(['/profile']);
    })

  }

}
