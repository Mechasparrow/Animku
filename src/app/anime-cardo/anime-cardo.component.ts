import { Component, OnInit, Input } from '@angular/core';

//Import the Anime model
import {Anime} from '../../../models/Anime';

//Import the routing libs
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

//TODO add the routing params thingy
import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'anime-cardo',
  templateUrl: './anime-cardo.component.html',
  styleUrls: ['./anime-cardo.component.css']
})
export class AnimeCardoComponent implements OnInit {

  @Input() anime:Anime;

  constructor(
    private route: ActivatedRoute,
    private router:Router
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

}
