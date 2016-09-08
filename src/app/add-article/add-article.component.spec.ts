/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AddArticleComponent } from './add-article.component';

describe('Component: AddArticle', () => {
  it('should create an instance', () => {
    let component = new AddArticleComponent();
    expect(component).toBeTruthy();
  });
});
