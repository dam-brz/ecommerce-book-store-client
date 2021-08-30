import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user.model';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: Array<User>;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getAllUsers().subscribe(
      respose => this.handleSuccessfulResponse(respose)
    );
  }

  handleSuccessfulResponse(response: User[]) {
    this.users = response;
  }
}
