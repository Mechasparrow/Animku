import {Injectable} from '@angular/core';

//Collection model
import {Colllection} from '../../models/Collection';

import * as localForage from "localforage";

@Injectable()
export class CollectionDatabase {

  constructor() {

  }

  //Get the collection of entertainment
  getCollection(){

    var collection_promise = new Promise((resolve, reject) =>{
      localForage.getItem('collection').then (function (collection:Collection) {
        resolve(<Collection>collection);
      }).catch (function (error) {
        //If there is an error, just return a new collection
        var new_collection = new Collection("default");
        resolve(new_collection);
      })
    });

    return collection_promise;


  }

  // Update the collection of entertainment
  updateCollection(collection:Collection) {

    var collection_promise = new Promise((resolve, reject) => {
      localForage.setItem('collection', collection).then (function (data) {
        resolve(<Collection>data);
      }).catch (function (error) {
        reject(error);
      })
    });

    return collection_promise;

  }

}
