import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  constructor(private Client: HttpClient) {}

  getArticles(): Observable<Array<Article>> {
    return this.Client.get<Array<Article>>('http://localhost:8080/articles');
  }
  deleteArticles(id: number): Observable<any> {
    return this.Client.delete('http://localhost:8080/articles/' + id);
  }
  addArticle(article: Article): Observable<any> {
    return this.Client.post('http://localhost:8080/articles', article);
  }

  UpdateArticles(article: Article): Observable<any> {
    return this.Client.put(
      'http://localhost:8080/articles/' + article.id,
      article
    );
  }
}
