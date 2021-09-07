import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book/book';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books!: Array<Book>;
  selectedBook!: Book;
  action!: string;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
  }

  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
  }

  handleSuccessfulResponse(response: Book[]) {
    this.books = response;
  }

  addBook() {
    this.selectedBook = new Book();
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'add' } });
  }

}
