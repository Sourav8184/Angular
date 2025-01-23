import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/Home/Home.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgIfComponent } from './components/ngIf/ngIf.component';
import { NgForComponent } from './components/ngFor/ngFor.component';
import { ControlStatementComponent } from './components/controlStatement/controlStatement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedComponent } from './components/linked/linked.component';
import { TemplateComponent } from './components/template/template.component';
import { ReactiveComponent } from './components/reactive/reactive.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dataBinding', component: DataBindingComponent },
  { path: 'ngClass', component: NgClassComponent },
  { path: 'user', component: UserComponent },
  { path: 'ngStyle', component: NgStyleComponent },
  { path: 'ngFor', component: NgForComponent },
  { path: 'ngIf', component: NgIfComponent },
  { path: 'control-flow', component: ControlStatementComponent },
  { path: 'signal', component: SignalComponent },
  { path: 'linked', component: LinkedComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'reactive', component: ReactiveComponent },
];
