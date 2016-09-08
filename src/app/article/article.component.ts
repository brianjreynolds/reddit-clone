import { Component } from '@angular/core';
import { Article } from '../shared/article';

@Component({
  selector: 'my-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  inputs: ['article'],
  host: {
      class: 'row'
  }
})
export class ArticleComponent{
    article: Article;

    voteUp():boolean {
        this.article.voteUp();
        return false;
    }

    voteDown():boolean {
        this.article.voteDown();
        return false;
    }
}
