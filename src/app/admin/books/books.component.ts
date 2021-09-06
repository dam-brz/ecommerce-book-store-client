import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book/book';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books!: Array<Book>;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: Book[]) {
    this.books = response;
  }

}
