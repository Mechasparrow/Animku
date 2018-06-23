
import {Entertainment} from './Entertainment';

export class Collection {

  public name:string
  public content_list:Entertainment[];

  constructor(name:string) {
    this.name = name;
    this.content_list = [];
  }

  //Add item to collection
  public addToCollection() {

  }

  //Removes item from collection
  public removeFromCollection(idx:number) {

  }

}
