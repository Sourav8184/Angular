import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngIf',
  imports: [NgIf, FormsModule],
  templateUrl: './ngIf.component.html',
  styleUrls: ['./ngIf.component.css'],
})
export class NgIfComponent {
  div1Visiable: boolean = true;
  number1: string = '';
  number2: string = '';
  showDiv1() {
    this.div1Visiable = true;
  }
  hideDiv1() {
    this.div1Visiable = false;
  }
}
