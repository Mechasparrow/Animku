
import {Entertainment} from './Entertainment';

/**
description
episodes
image_url
score
title
type
url
:
"https://myanimelist.net/anime/9253/Steins_Gate"
**/

export class Anime extends Entertainment {

  episodes:number;
  score:number;
  type:string;

  constructor() {
    super();
  }

}
