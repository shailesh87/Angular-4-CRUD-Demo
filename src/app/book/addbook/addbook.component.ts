/**
 * Add new book component
 * 
 */
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import{BooksService} from '../book-service/books.service';
import  {Book} from '../book-service/book';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  newBook:any={};
  bookId:number;
  constructor(private bookService:BooksService, private _location:Location) {
    this.newBook={};
    this.newBook.id=bookService.getBookFromData().length+1;
   }
  
  ngOnInit() {
  }
  /**
   * Add new book in the list
   */
  addBook(){
    this.newBook.id = +this.newBook.id; 
    this.bookService.addBook(this.newBook);    
    this.newBook={};
    this._location.back();
  }
/**
 * 
 * Cancel book editing
 */
  cancelAdd(){
    this.newBook={};
    this._location.back();
  }
}
