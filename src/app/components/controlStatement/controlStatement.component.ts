import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlStatement',
  imports: [FormsModule],
  templateUrl: './controlStatement.component.html',
  styleUrls: ['./controlStatement.component.css'],
})
export class ControlStatementComponent {
  div1Visible: boolean = true;
  isChecked: boolean = true;
  weekDay: string = '';
  cityList: string[] = ['Ludhiana', 'Pune', 'Saharanpur', 'Jaipur', 'Mumbai'];
  showOrHide(TF: boolean) {
    this.div1Visible = TF;
  }
}
