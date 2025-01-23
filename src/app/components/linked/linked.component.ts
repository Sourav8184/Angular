import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked',
  imports: [],
  templateUrl: './linked.component.html',
  styleUrls: ['./linked.component.css'],
})
export class LinkedComponent {
  constructor() {}
  firstName = signal<string>('Sourav');
  lastName = signal<string>('Kashyap');

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newV, preV) => {
      debugger;
      const fullName = newV + ' ' + this.lastName();
      debugger;
      return fullName;
    },
  });

  changeFullName() {
    this.firstName.set('Payal');
  }
}
