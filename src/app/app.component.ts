import { Component, Injectable } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { Article } from './shared/article';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ArticleComponent],
  providers: [Article]
})

export class AppComponent {
  title = 'Reddit Clone';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('ng-book 2','http://ng-book.com'),
      new Article('ng-newsletter','http://ng-newsletter.com')
    ];
  }
}
