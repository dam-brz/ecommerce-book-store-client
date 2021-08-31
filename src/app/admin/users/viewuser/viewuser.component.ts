import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user/user.model';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input()
  user!: User

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user) => {
        this.router.navigate(['admin', 'users']);
      }
    );
  }

}
