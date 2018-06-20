/**
 * 
 * Manage books using BookService
 */
import { Injectable } from '@angular/core';
import  {Book} from './book';
import {BOOK_LIST} from './book-data';
import { findIndex } from 'lodash';
@Injectable()
export class BooksService {
  private booklist=BOOK_LIST;
/**
 * Return book lists after shorting
 * 
 */
  getBookFromData():Book[]{
    // console.log(this.booklist);
    return this.booklist.sort(this.compareValues('title'));
  }
/**
 * Add book in the list
 * @param book 
 * 
 */
  addBook(book:Book){
    this.booklist.push(book);
    // console.log(this.booklist);

  }
  updateBook(book:Book){
    let index=findIndex(this.booklist,(u:Book)=>{
      return u.id=== book.id;
    })
    // console.log(book);
    this.booklist[index]=book;
  }
  /**
   * 
   * @param book
   * delete book from the list
   */
  deleteBook(book:Book){
    this.booklist.splice(this.booklist.indexOf(book),1);
    // console.log(this.booklist);
  }
  /**
   * return book data by id
   */
  bookById(id:number){
    let index=findIndex(this.booklist,(u:Book)=>{
      return u.id=== id;
    })
    return this.booklist[index]
  }

 /**
  * Sort the book list
  * @param key 
  * @param order 
  */
  compareValues(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || 
         !b.hasOwnProperty(key)) {
        return 0; 
      }
      
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
        
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? 
        (comparison * -1) : comparison
      );
    };
  }
  constructor() { }

}
