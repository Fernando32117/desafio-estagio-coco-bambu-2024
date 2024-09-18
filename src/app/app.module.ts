import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  provideAnimations
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { BookComponent } from './components/book/book.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { FloatMenuComponent } from './components/float-menu/float-menu.component';
import { SavedBooksPageComponent } from './pages/saved-books-page/saved-books-page.component';
import { FinishedBooksPageComponent } from './pages/finished-books-page/finished-books-page.component';
import { FavoritesBooksPageComponent } from './pages/favorites-books-page/favorites-books-page.component';
import { FloatHomeComponent } from './components/float-home/float-home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ViewBooksComponent,
    BookComponent,
    HomePageComponent,
    LogoComponent,
    FloatMenuComponent,
    SavedBooksPageComponent,
    FinishedBooksPageComponent,
    FavoritesBooksPageComponent,
    FloatHomeComponent,
    LoaderComponent,
    IconButtonComponent,
    CategoriesComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule {}
