import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BookComponent } from './book/book.component';

import{BooksService} from './book/book-service/books.service';
import{PagerService} from './book/book-service/pager.service';
import { EditbookComponent } from './book/editbook/editbook.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BookComponent,
    EditbookComponent,
    AddbookComponent,
    OrderByPipe
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
	AngularFontAwesomeModule
  ],
  providers: [BooksService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
