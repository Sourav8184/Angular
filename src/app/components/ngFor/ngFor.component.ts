import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngFor',
  imports: [NgFor],
  templateUrl: './ngFor.component.html',
  styleUrls: ['./ngFor.component.css'],
})
export class NgForComponent {
  cityList: string[] = ['Ludhiana', 'Pune', 'Jaipur', 'Mumbai', 'Saharanpur'];
  employee: any[] = [
    { id: 1, name: 'A', city: 'Ludhiana' },
    { id: 2, name: 'B', city: 'Pune' },
    { id: 3, name: 'C', city: 'Jaipur' },
    { id: 4, name: 'D', city: 'Mumbai' },
    { id: 5, name: 'E', city: 'Saharanpur' },
  ];
}
