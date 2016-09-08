import { Injectable } from '@angular/core';

@Injectable()
export class Article {
  title: string;
  link: string;

  constructor( title: string,  link: string){
    this.title = title;
    this.link = link;
  }
}
