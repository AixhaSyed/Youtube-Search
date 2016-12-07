import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../model/SearchResult';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  inputs: ['result']

})
export class SearchResultsComponent implements OnInit {

       result: SearchResult;

      
  constructor() { }

  ngOnInit() {
  }

}
