import { Component, OnInit, Input } from '@angular/core';

//Import the Anime model
import {Anime} from '../../../models/Anime';
import {Collection} from '../../../models/Collection';
import {Profile} from '../../../models/Profile';

//Import the routing libs
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {NavigationExtras} from '@angular/router';

//import the database sys
import {CollectionDatabase} from '../../../lib/local_db/collection_db';
import {ProfileDatabase} from '../../../lib/local_db/profile_db';

@Component({
  selector: 'anime-cardo',
  templateUrl: './anime-cardo.component.html',
  styleUrls: ['./anime-cardo.component.css'],
  providers: [CollectionDatabase, ProfileDatabase]
})
export class AnimeCardoComponent implements OnInit {

  @Input() anime:Anime;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private database: CollectionDatabase,
    private profile_db: ProfileDatabase
  ) { }

  ngOnInit() {

  }

  //Route to the anime page
  viewAnime() {

    let navExtras: NavigationExtras = {
      queryParams: {
        'anime': JSON.stringify(this.anime)
      }
    }

    this.router.navigate(['/view-anime'], navExtras);

  }

  //TODO abstractme
  addAnime() {

    let that = this;

    this.database.getCollection().then (function (the_collection:Collection) {

      console.log(the_collection)
      var updated_collection:Collection = the_collection.addToCollection(that.anime)


      return that.database.updateCollection(updated_collection);

    }).then (function (the_updated_collection:Collection) {
      console.log(the_updated_collection);
    }).catch (function (err) {
      console.log(err);
    })

  }

  addAnimeAsFav() {

    let that = this;

    this.profile_db.getProfile().then (function (the_profile:Profile) {

      let updated_profile = Object.assign( Object.create( Object.getPrototypeOf(the_profile)), the_profile)

      updated_profile.fav_entertainment = that.anime;

      return that.profile_db.updateProfile(updated_profile);

    }).then (function (updatedProf:Profile) {
      console.log("updated favorite entertainment");
    })

  }

}
