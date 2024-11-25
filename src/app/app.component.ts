import { Component } from '@angular/core';
import { Lib1ComponentProxy } from './lib1-component.proxy';
// import { Lib1AComponent } from 'lib1';
// import { Lib1Component } from './lib1-component.proxy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Lib1ComponentProxy],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-standalone-minimal';
}
