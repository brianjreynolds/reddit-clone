import { Component, Injectable } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';

import { Article } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ArticleComponent,AddArticleComponent],
  providers: [Article]
})

export class AppComponent {
  title = 'Reddit Clone';
  articles: Article[];
  onAddArticleCallback: Function;

  constructor() {
    this.articles = [
      new Article('ng-book 2','http://ng-book.com'),
      new Article('ng-newsletter','http://ng-newsletter.com')
    ];

    this.onAddArticleCallback = this.onAddArticle.bind(this);
  }

  onAddArticle(article:Article):void {
    //   console.log('onAddArticle called in AppComponent with argument ', article);
    this.articles.push(article);
  }

  sortedArticles():Article[] {
      return this.articles
      .sort((a:Article, b:Article) => b.votes - a.votes);
  }
}
