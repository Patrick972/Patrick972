import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { }
  test(){
    console.log("Hello World");
  }
  test2(){
    console.log("object");
  }
  ngOnInit(): void {
  }

}
