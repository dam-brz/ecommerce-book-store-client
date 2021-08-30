import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user/user.model';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @Input()
  user!: User
  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addUser() {
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        this.router.navigate(['admin', 'users']);
      }
    );
  }
}