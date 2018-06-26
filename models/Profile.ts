
import {Entertainment} from './Entertainment';
import {Waifu} from './Waifu';

//TODO
//implement fields
/**
  name,
  fav_waifu,
  fav_entertainment
  bio
**/

export class Profile {

  public name:string;
  public fav_waifu:Waifu;
  public fav_entertainment:Entertainment;
  public bio:string;

  constructor(name:string, bio:string, fav_waifu:Waifu, fav_entertainment:Entertainment) {
    this.name = name;
    this.bio = bio;
    this.fav_waifu = fav_waifu;
    this.fav_entertainment = fav_entertainment;
  }

  static parseRawProfile(profile_json:any): Profile {
    let profile:Profile = Object.create(Profile.prototype);
    return Object.assign(profile, profile_json);
  }

}
