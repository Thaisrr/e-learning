import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/Core/appComponent/app.component';
import { NavComponent } from './components/Core/nav/nav.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/Core/footer/footer.component';
import { HomeComponent } from './components/Core/home/home.component';
import { FlexboxGameComponent } from './components/games/flexbox-game/flexbox-game.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { SelectorGameComponent } from './components/games/selector-game/selector-game.component';
import { PathFormComponent } from './components/Forms/path-form/path-form.component';
import { MessageComponent } from './components/Core/message/message.component';
import {HttpClientModule} from '@angular/common/http';
import { PathsComponent } from './components/Core/paths/paths.component';
import {PathDetailsComponent} from './components/Core/path-details/path-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    FlexboxGameComponent,
    SelectorGameComponent,
    PathFormComponent,
    MessageComponent,
    PathsComponent,
    PathDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'user/home', component: HomeComponent},
      {path: 'user/game/flexbox', component: FlexboxGameComponent},
      {path: 'user/game/selector', component: SelectorGameComponent},
      {path: 'trainer/add/path', component: PathFormComponent},
      {path: 'user/paths', component: PathsComponent},
      {path: 'user/path/:id', component: PathDetailsComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
