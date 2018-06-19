//Required Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import the Material Modules
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

//Root Angular Component
import { AppComponent } from './app.component';

//Layout system
import { FlexLayoutModule } from "@angular/flex-layout";

//Pages for app
import { HomePageComponent } from './home-page/home-page.component';

//Developed Components for Application
import { WaifuCardoComponent } from './waifu-cardo/waifu-cardo.component';
import { AppToolBarComponent } from './app-tool-bar/app-tool-bar.component';

import { RouterModule, Routes } from '@angular/router';

//Routing config
const appRoutes:Routes = [
  {path: '', component: HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WaifuCardoComponent,
    AppToolBarComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //<-- For debugging only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
