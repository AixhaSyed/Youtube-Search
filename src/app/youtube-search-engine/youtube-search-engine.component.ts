import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../model/SearchResult';

@Component({
  selector: 'youtube',
  templateUrl: './youtube-search-engine.component.html',
  styleUrls: ['./youtube-search-engine.component.css']
})
export class YoutubeSearchEngineComponent implements OnInit {

  loading: boolean;
  results: SearchResult[];
  
  constructor() { }
  
  updateResult(results: SearchResult[]){
    this.results = results;
    //console.log("results:", this.results); // uncomment to take a look
  }
  
  ngOnInit() {
  }

}
