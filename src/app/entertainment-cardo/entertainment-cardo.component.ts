import { Component, OnInit, Input } from '@angular/core';

//Import the entertainment model
import {Entertainment} from '../../../models/Entertainment';

@Component({
  selector: 'entertainment-cardo',
  templateUrl: './entertainment-cardo.component.html',
  styleUrls: ['./entertainment-cardo.component.css']
})
export class EntertainmentCardoComponent implements OnInit {

  @Input() entertainment:Entertainment;

  constructor() { }

  ngOnInit() {
  }

}
