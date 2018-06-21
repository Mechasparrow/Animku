//Required Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Import the Material Modules
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

//Root Angular Component
import { AppComponent } from './app.component';

//Layout system
import { FlexLayoutModule } from "@angular/flex-layout";

//Pages for app
import { HomePageComponent } from './home-page/home-page.component';
import { WaifuPageComponent } from './waifu-page/waifu-page.component';

//Developed Components for Application
import { WaifuCardoComponent } from './waifu-cardo/waifu-cardo.component';
import { AppToolBarComponent } from './app-tool-bar/app-tool-bar.component';

//Routing libs
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//Routing config
const appRoutes:Routes = [
  {path: '', component: HomePageComponent},
  {path: 'waifus', component: WaifuPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WaifuCardoComponent,
    AppToolBarComponent,
    WaifuPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //<-- For debugging only
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
