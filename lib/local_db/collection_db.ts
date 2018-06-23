import {Injectable} from '@angular/core';

//Collection model
import {Collection} from '../../models/Collection';

import * as localForage from "localforage";

@Injectable()
export class CollectionDatabase {

  constructor() {

  }

  //parses a raw collection
  private parseRawCollection(raw_collection:any) {

    var new_collection = new Collection(raw_collection.name);

    new_collection.content_list = raw_collection.content_list;

    return new_collection;

  }

  //Get the collection of entertainment
  public getCollection(){

    let that = this;

    var collection_promise = new Promise((resolve, reject) =>{
      localForage.getItem('collection').then (function (collection:Collection) {
        if (collection === null) {
          //If there is an null, just return a new collection
          var new_collection:Collection = new Collection("default");
          resolve(new_collection);

        }

        resolve(that.parseRawCollection(collection));
      }).catch (function (error) {

        reject(error);
      })
    });

    return collection_promise;


  }

  // Update the collection of entertainment
  public updateCollection(collection:Collection) {

    let that = this;

    var collection_promise = new Promise((resolve, reject) => {
      localForage.setItem('collection', collection).then (function (data) {
        resolve(that.parseRawCollection(data));
      }).catch (function (error) {
        reject(error);
      })
    });

    return collection_promise;

  }

}
