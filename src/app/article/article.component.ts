import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  inputs: ['article']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
