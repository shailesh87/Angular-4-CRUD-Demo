/**
 * Book Component 
 * 
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{BooksService} from './book-service/books.service';
import  {Book}from './book-service/book';
import { PagerService } from './book-service/pager.service';
import { OrderByPipe } from '../order-by.pipe';
import {clone} from 'lodash';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']  
})
export class BookComponent implements OnInit {
  books:Book[];
  order: string = 'id';
  reverse: boolean = true;
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  constructor(private bookService:BooksService, private pagerService: PagerService, private route: ActivatedRoute) { } 

  ngOnInit() {
    
    this.getBooks();
  }
  /**
   * Get the books from the service
   * 
   */
  getBooks=function(){
    let params =  this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
       let pageNo = +params['page'] || 1;   
       this.books=this.bookService.getBookFromData();
       this.setPage(pageNo); 
    });
    
    
  }
  /**
   * Handel the pagination
   * @param page 
   * 
   */
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.books.length, page);

    // get current page of items
    this.pagedItems = this.books.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}
