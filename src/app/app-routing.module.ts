import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './admin/books/books.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
