import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  private sourcesUrl = `https://newsapi.org/v2/sources?language=en&apiKey=${environment.API_KEY}`;
  private headlinesUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${environment.API_KEY}`;

  constructor(private http: HttpClient) { }

  initializeSources() {
    return this.http.get(this.sourcesUrl);
  }

  initializeHeadlines() {
    return this.http.get(this.headlinesUrl);
  }

  getArticlesByID(sourceId) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${environment.API_KEY}`);
  }

}
