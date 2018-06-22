import { Component, OnInit } from '@angular/core';

//Import the Anime model
import {Anime} from '../../../models/Anime';

@Component({
  selector: 'anime-cardo',
  templateUrl: './anime-cardo.component.html',
  styleUrls: ['./anime-cardo.component.css']
})
export class AnimeCardoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.runTest();
  }

  runTest() {


  }

}
