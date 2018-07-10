import {Injectable} from '@angular/core';

//Collection model
import {Profile} from '../../models/Profile';

import * as localForage from "localforage";

@Injectable()
export class ProfileDatabase {

  constructor() {

  }

  //TODO parse raw profile [X]
  //TODO get user profile
  //TODO update user profile

  //Gets the user profile
  public getProfile() {
    let that = this;

    var profile_promise = new Promise((resolve, reject) => {
        localForage.getItem('profile').then (function (profile:Profile){

        if(profile === null) {

          var new_profile:Profile = new Profile(
            "",
            "",
            null,
            null
          );
          resolve(new_profile);
        }

        resolve(Profile.parseRawProfile(profile));

      }).catch (function (error) {
        reject(error);
      })
    })

    return profile_promise;

  }

  //Updates the user profile
  public updateProfile(updated_profile:Profile) {
    let that = this;

    var profile_promise = new Promise((resolve, reject) => {

      localForage.setItem('profile', updated_profile).then (function (the_updated_profile:Profile) {
        resolve(Profile.parseRawProfile(the_updated_profile));
      }).catch (function (error) {
        reject(error);
      })
    })

    return profile_promise;

  }


}
