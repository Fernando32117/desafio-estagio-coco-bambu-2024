import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SavedBooksPageComponent } from './pages/saved-books-page/saved-books-page.component';
import { FinishedBooksPageComponent } from './pages/finished-books-page/finished-books-page.component';
import { FavoritesBooksPageComponent } from './pages/favorites-books-page/favorites-books-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'saved', component: SavedBooksPageComponent },
  { path: 'finished', component: FinishedBooksPageComponent },
  { path: 'favorites', component: FavoritesBooksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
