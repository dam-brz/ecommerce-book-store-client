import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user/user.model';
import { Book } from '../model/book/book';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/users/');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/', newUser);
  }

  deleteUser(id: number) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8080/books/');
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>('http://localhost:8080/books/', newBook);
  }

  deleteBook(id: number) {
    return this.httpClient.delete<Book>('http://localhost:8080/books/' + id);
  }

}
