import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book/book';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  @Input()
  book!: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
