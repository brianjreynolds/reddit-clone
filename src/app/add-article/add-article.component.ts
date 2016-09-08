import { Component } from '@angular/core';
import { Article } from '../shared';

@Component({
  selector: 'my-add-article',
  templateUrl: 'add-article.component.html',
  styleUrls: ['add-article.component.css'],
  inputs: ['onAddArticle']
})
export class AddArticleComponent {
  onAddArticle: Function;

  addArticle(newTitle:HTMLInputElement, newLink:HTMLInputElement) {
    //   console.log('Adding an article', newTitle.value, newLink.value);
      const article = new Article(newTitle.value, newLink.value);
      this.onAddArticle(article);

      newTitle.value = '';
      newLink.value = '';
  }
}
