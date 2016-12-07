import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YoutubeSearchEngineComponent } from './youtube-search-engine/youtube-search-engine.component';
import { youTubeServiceInjectables } from './Services/youtube.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultsComponent,
    SimpleHttpComponent,
    YoutubeSearchEngineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ youTubeServiceInjectables  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
