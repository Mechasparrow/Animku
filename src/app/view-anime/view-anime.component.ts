import { Component, OnInit } from '@angular/core';

//Import the anime model
import {Anime} from '../../../models/Anime';
import {Collection} from '../../../models/Collection';

//Import the routing libs
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

//Async libs
import { Observable }         from 'rxjs';
import { map }                from 'rxjs/operators';

//Import collection database system
import {CollectionDatabase} from '../../../lib/local_db/collection_db';

@Component({
  selector: 'app-view-anime',
  templateUrl: './view-anime.component.html',
  styleUrls: ['./view-anime.component.css'],
  providers: [CollectionDatabase]
})
export class ViewAnimeComponent implements OnInit {

  public the_anime:Anime;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private database: CollectionDatabase
  ) { }

  ngOnInit() {
    console.log("get anime passed");
    this.getAnimePassedIn();
  }

  //Get the anime parameter that was sent in
  getAnimePassedIn() {

    this.the_anime = <Anime> JSON.parse(this.route.snapshot.queryParamMap.get('anime'));
    console.log(this.the_anime);
  }

  //TODO implement me
  addAnime() {

    let that = this;

    this.database.getCollection().then (function (the_collection:Collection) {

      console.log(the_collection)
      var updated_collection:Collection = the_collection.addToCollection(that.the_anime)


      return that.database.updateCollection(updated_collection);

    }).then (function (the_updated_collection:Collection) {
      console.log(the_updated_collection);
    }).catch (function (err) {
      console.log(err);
    })

  }

}
