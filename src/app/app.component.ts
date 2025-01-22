import { Component } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgForComponent } from './components/ngFor/ngFor.component';
import { NgIfComponent } from './components/ngIf/ngIf.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';

@Component({
  selector: 'app-root',
  imports: [
    DataBindingComponent,
    AdminComponent,
    UserComponent,
    NgForComponent,
    NgIfComponent,
    NgClassComponent,
    NgStyleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learningAngular';
}
