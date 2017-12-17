/**
 * Edit select book by id
 * 
 * 
 */
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import{BooksService} from '../book-service/books.service';
import  {Book}from '../book-service/book';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  editedBook:any={};
  bookId:number;
  constructor(private bookService:BooksService, private route: ActivatedRoute, private router: Router, private _location:Location) {
    this.bookId = +route.snapshot.params['id'];
    this.showEditBookForm();
   }

  ngOnInit() {
  }
/**
 * get book details from the id
 * Get Id from the rout param
 * 
 */
  showEditBookForm(){
    console.log(this.bookId);
    this.editedBook = this.bookService.bookById(this.bookId);   
  }
  /**
   * Update book information
   */
  updateBook(){
    this.editedBook.id = +this.editedBook.id; 
    this.bookService.updateBook(this.editedBook);    
    this.editedBook={};
    this._location.back();
  }
/**
 * 
 * Cancel book editing
 */
  cancelEdits(){
    this.editedBook={};
    this._location.back();
  }
}
