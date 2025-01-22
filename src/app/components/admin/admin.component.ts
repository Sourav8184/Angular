import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [UserComponent, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {}
