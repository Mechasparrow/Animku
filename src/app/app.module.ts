import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import the Material Module
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { AnimeCardoComponent } from './anime-cardo/anime-cardo.component';
import { HomePageComponent } from './home-page/home-page.component';

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    AnimeCardoComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
