import { Component } from '@angular/core';
// import { AdminComponent } from './components/admin/admin.component';
// import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  // imports: [AdminComponent, UserComponent],
  imports: [DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learningAngular';
}
