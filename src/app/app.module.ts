import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SimpleHttpComponent} from './simple-http/simple-http.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {YoutubeSearchComponent} from './youtube-search/youtube-search.component';
import {SearchBoxComponent} from './youtube-search/search-box.component';
import {youTubeSearchInjectables} from './youtube-search/you-tube-search.injectables';
import {SearchResultComponent} from './youtube-search/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
