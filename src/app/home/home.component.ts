import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headlinesArray: Array<any>;
  sourcesArray: Array<any>;

  constructor(private newsApi: NewsAPIService) { }

  ngOnInit() {
    // get sources
     this.getSources();

    // get headlines
    this.getHeadlines();
  }

  getSources() {
    this.newsApi.initializeSources().subscribe(data => {
      this.sourcesArray = data['sources'];
    });
  }

  getHeadlines() {
    this.newsApi.initializeHeadlines().subscribe(data => {
      this.headlinesArray = data['articles'];
    });
  }

  searchArticles(sourceId) {
    console.log(sourceId);
    this.newsApi.getArticlesByID(sourceId).subscribe(data => {
      this.headlinesArray = data['articles'];
    });
  }

}
