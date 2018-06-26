import { Component, OnInit } from '@angular/core';

//Import the Waifu model
import {Waifu} from '../../../models/Waifu';

//Import the routing libs
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

//Async libs
import { Observable }         from 'rxjs';
import { map }                from 'rxjs/operators';

@Component({
  selector: 'app-waifu-view',
  templateUrl: './waifu-view.component.html',
  styleUrls: ['./waifu-view.component.css']
})
export class WaifuViewComponent implements OnInit {

  public the_waifu:Waifu;

  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    console.log("get waifu");
    this.getWaifuPassedIn();
  }

  getWaifuPassedIn() {

    this.the_waifu = Waifu.generateWaifuOffJsonString(this.route.snapshot.queryParamMap.get('waifu'));
    console.log(this.the_waifu);

  }

}
