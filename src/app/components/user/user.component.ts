import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  template: `
    <h1 class="text-danger">User Single File Component</h1>
    <button class="btn btn-success p-2 m-1" routerLink="/dataBinding">
      Go To DataBinding
    </button>
  `,
  styles: ['.text-danger { color: blue; }'],
})
export class UserComponent {}
