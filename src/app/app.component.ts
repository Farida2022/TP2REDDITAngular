import { HtmlParser } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleserviceService } from './articleservice.service';
import { HttpserviceService } from './httpservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TP2reddit';
  articles:Article[]=[];

  constructor(private service:HttpserviceService){


  }
  ngOnInit(): void {

   // this.articles = this.service.getArticles();
   this.getArticles();
  }
  addArticle(title : HTMLInputElement, link:HTMLInputElement){

  //  this.articles.push( new Article(title.value,link.value));
  this.service.addArticle(new Article(title.value,link.value)).subscribe(() => this.getArticles());
    title.value ='';
    link.value ='';
    return false;

  }

  UpdateArticle(article:Article){

    //  this.articles.push( new Article(title.value,link.value));
    this.service.UpdateArticles(article).subscribe(() => this.getArticles());

      return false;

    }
  supprimerArticle(article:Article){
    // let  index: number = this.articles.indexOf(article);

    //    this.articles.splice(index, 1);
    this.service.deleteArticles(article.id).subscribe( {
      next:restArticles => this.articles = restArticles,
      complete: () => console.log('complete!!!'),
      error: err => console.log(`error! ${err} msg: ${err.message}`)
    });
    this.getArticles();
  return false;
  }
  sortedArticle():Article[]{
return this.articles.sort((a:Article, b:Article)=>b.votes - a.votes);
  }


  getArticles() {
     // this.service.getArticles().subscribe( restArticles => this.articles = restArticles );

     this.service.getArticles().subscribe( {
      next:restArticles => this.articles = restArticles,
      complete: () => console.log('complete!!!'),
      error: err => console.log(`error! ${err} msg: ${err.message}`)
    });

    console.log('hello!');
    }


}



