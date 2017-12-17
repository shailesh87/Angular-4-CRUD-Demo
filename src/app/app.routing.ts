/**
 * Manage the App routing
 * 
 */
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{BookComponent} from './book/book.component';
import{EditbookComponent} from './book/editbook/editbook.component';
import{AddbookComponent} from './book/addbook/addbook.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'home', component: HomeComponent },
         { path: 'books', component: BookComponent },
         { path: 'books/new', component: AddbookComponent },
         { path: 'books/edit/:id', component: EditbookComponent }

    ],{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
 })
export class AppRoutingModule {}