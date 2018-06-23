import { Component, OnInit } from '@angular/core';

//Import the anime model
import {Anime} from '../../../models/Anime';
import {Collection} from '../../../models/Collection';

//Import the routing libs
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

//Async libs
import { Observable }         from 'rxjs';
import { map }                from 'rxjs/operators';

@Component({
  selector: 'app-view-anime',
  templateUrl: './view-anime.component.html',
  styleUrls: ['./view-anime.component.css']
})
export class ViewAnimeComponent implements OnInit {

  public the_anime:Anime;

  constructor(
    private route: ActivatedRoute,
    private router:Router
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


  }

}
