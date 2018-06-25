import { Component, EventEmitter,  OnInit, Input, Output } from '@angular/core';

//Import the entertainment model
import {Entertainment} from '../../../models/Entertainment';

@Component({
  selector: 'entertainment-cardo',
  templateUrl: './entertainment-cardo.component.html',
  styleUrls: ['./entertainment-cardo.component.css']
})
export class EntertainmentCardoComponent implements OnInit {

  @Input() entertainment:Entertainment;
  @Output() delete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  deleteEntertainment() {
    this.delete.emit(true);
  }

}
