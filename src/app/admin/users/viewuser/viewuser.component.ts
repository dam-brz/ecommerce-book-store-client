import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user.model';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input()
  user!: User

  constructor() { }

  ngOnInit(): void {
  }

}
