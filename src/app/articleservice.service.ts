import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleserviceService {

  constructor() { }

  getArticles():Article[] {
    return[
    new Article('Angular2','http://angular.io', 3),
    new Article('Fullstack','http://fullstack.io', 2),
    new Article('article3','link3', 1),
    new Article('article4','link4', 5)
  ];
}


}
