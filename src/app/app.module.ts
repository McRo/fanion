import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';

import { ArtistsService} from './services/artists.service'

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ArtistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
