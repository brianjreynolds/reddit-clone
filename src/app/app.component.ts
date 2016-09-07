import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ArticleComponent]
})

export class AppComponent {
  title = 'Reddit Clone';
  articles: Object[];

  constructor() {
    this.articles = [{
      title: 'ng-newsletter',
      link: 'http://ng-newsletter.com'
    }, {
        title: 'ng-newsletter',
        link: 'http://ng-newsletter.com'
      }, {
        title: 'ng-newsletter',
        link: 'http://ng-newsletter.com'
      }, {
        title: 'ng-newsletter',
        link: 'http://ng-newsletter.com'
    }];
  }
}
