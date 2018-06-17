import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import the Material Module
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { WaifuCardoComponent } from './waifu-cardo/waifu-cardo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WaifuCardoComponent
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
