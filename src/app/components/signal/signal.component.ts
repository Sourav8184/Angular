import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  firstName = signal<string>('Sourav');
  lastName = signal<string>('Kashyap');
  courseName: string = 'Angular';
  rollNo = signal<number>(0);
  constructor() {
    const value = this.firstName();
    console.log(value);
    setTimeout(() => {
      // this.firstName.set('Payal');
      this.courseName = 'ReactJS';
    }, 3000);
  }

  incrementValue() {
    this.rollNo.update((old) => old + 1);
  }
}
