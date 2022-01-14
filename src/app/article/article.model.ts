
export class Article {

votes: number;
title: string;
link: string;
id: number = 0;
static ID: number = 0;
  constructor( title: string, link: string,votes?:number) {

    this.title =title;
    this.link =link;
    this.votes = votes||0;
    this.id = Article.ID++;
  }
  voteUp():void{
    this.votes+=1;
  }

  voteDown():void{
    this.votes-=1;
  }

}
