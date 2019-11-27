import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import {
  MatGridListModule,
  MatIconModule,
  MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeCategoryComponent } from './joke-category/joke-category.component';

const appRoutes: Routes = [
  {
    path: 'jokes',
    component: JokeComponent,
    data: { title: 'Jokes List' }
  },
  {
    path: 'joke-category/:id',
    component: JokeCategoryComponent,
    data: { title: 'Joke Category' }
  }
  // { path: '',
  //   redirectTo: '/',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeCategoryComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
