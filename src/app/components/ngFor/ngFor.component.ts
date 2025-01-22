import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngFor',
  imports: [NgFor],
  templateUrl: './ngFor.component.html',
  styleUrls: ['./ngFor.component.css'],
})
export class NgForComponent {
  constructor(private router: Router) {}
  navigateToNgStyle() {
    this.router.navigateByUrl('/ngStyle');
  }
  cityList: string[] = ['Ludhiana', 'Pune', 'Jaipur', 'Mumbai', 'Saharanpur'];
  employee: any[] = [
    { id: 1, name: 'A', city: 'Ludhiana' },
    { id: 2, name: 'B', city: 'Pune' },
    { id: 3, name: 'C', city: 'Jaipur' },
    { id: 4, name: 'D', city: 'Mumbai' },
    { id: 5, name: 'E', city: 'Saharanpur' },
  ];
}
