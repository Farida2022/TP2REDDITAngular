import { Component, Input, OnInit, Output } from '@angular/core';
import { Article } from './article.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article = new Article('tmp', 'Link');
  @Output()
  deleteEvent = new EventEmitter<Article>();
  @Output()
  updateEvent = new EventEmitter<any>();
  updatearticle: boolean = false;
  constructor() {}

  voteUp(): boolean {
    this.article.votes++;
    this.updateEvent.emit(this.article);
    return false;
  }

  voteDown(): boolean {
    this.article.votes--;
    this.updateEvent.emit(this.article);
    return false;
  }

  Update() {
    this.updatearticle = true;
  }
  UpdateArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.article.title = title.value;
    this.article.link = link.value;
    this.updateEvent.emit(this.article);
    this.updatearticle = false;
  }

  ngOnInit(): void {}
}
