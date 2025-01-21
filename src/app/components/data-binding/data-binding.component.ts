import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  firstName: string = 'Vishal Patel';
  rollNo: number = 52221202;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = 'Enter Full Name';
  city: string = '';
  books: string = '';

  constructor() {
    console.log([this.firstName, this.rollNo, this.isActive, this.currentDate]);
    this.isActive = false;
    console.log([this.firstName, this.rollNo, this.isActive, this.currentDate]);
  }

  buttonIsClicked() {
    alert('Welcome');
  }

  onCityChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.city = selectElement.value;
    setTimeout(() => {
      alert(`City changed , ${this.city}`);
    }, 300);
  }
}
