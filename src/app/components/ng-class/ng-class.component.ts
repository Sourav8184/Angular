import { NgClass, NgStyle } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyleComponent } from '../ng-style/ng-style.component';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
})
export class NgClassComponent {
  divBgColor = 'bg-success';

  bgGreen(className: string) {
    this.divBgColor = className;
  }
  bgRed(className: string) {
    this.divBgColor = className;
  }

  isChecked: string = 'true';
  isCheckedBool: boolean = false;
  div4Classname: string = '';
}
