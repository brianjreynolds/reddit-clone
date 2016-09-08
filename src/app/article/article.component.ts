import { Component } from '@angular/core';
import { Article } from '../shared/article';

@Component({
  moduleId: module.id,
  selector: 'my-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  inputs: ['article']
})
export class ArticleComponent{
    article: Article;
}
