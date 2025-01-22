import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
})
export class NgStyleComponent {
  constructor(private router: Router) {}
  bgColor = 'black';
  textColor = 'white';
  textSize = '30px';

  navigateToClass() {
    this.router.navigateByUrl('/ngClass');
  }

  bgGreenAndChangeStyle() {
    this.bgColor = 'green';
    this.textColor = 'red';
    this.textSize = '15px';
  }

  bgRedAndChangeStyle() {
    this.bgColor = 'red';
    this.textColor = 'black';
    this.textSize = '25px';
  }

  isChecked: boolean = false;

  styleObject: any = {
    color: 'green',
    'background-color': 'lightgrey',
    padding: '20px',
    border: '5px solid black',
  };
}
