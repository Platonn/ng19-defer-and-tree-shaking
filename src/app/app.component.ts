import { Component } from '@angular/core';
import { Lib1Component } from 'lib1';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Lib1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-standalone-minimal';
}
