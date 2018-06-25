//Angular imports
import { Component, OnInit } from '@angular/core';

//Models
import {Collection} from '../../../models/Collection';

//Collection database sys
import {CollectionDatabase} from '../../../lib/local_db/collection_db';


@Component({
  selector: 'app-view-collection-page',
  templateUrl: './view-collection-page.component.html',
  styleUrls: ['./view-collection-page.component.css'],
  providers: [CollectionDatabase]
})
export class ViewCollectionPageComponent implements OnInit {

  public collection:Collection;

  constructor(
    private database: CollectionDatabase
  ) {}

  ngOnInit() {

    //Retrieve the collection
    this.refreshCollection();

  }

  public refreshCollection() {
    let that = this;

    that.database.getCollection()
      .then((collection:Collection) => {
        that.collection = collection;
        console.log(that.collection);
      })
      .catch ((error) => {
        console.log(error);
      })
  }

  public onDelete(deleted:boolean, idx: number) {
    this.collection.removeFromCollection(idx);

    let that = this;
    this.database.updateCollection(this.collection).then (function (res) {
      that.refreshCollection();
    })
  }

}
