import { Component } from '@angular/core';
import { Lib1AComponent } from 'lib1';
import { Lib2AComponent } from 'lib2';
import { Lib3AWrapperComponent } from './lib3-a-WRAPPER.component';

// NOTE: it's not imported directly from lib4, but via a local proxy-file
import { Lib4AComponent } from './lib4-a-WRAPPER-simple-reexport';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Lib1AComponent,
    Lib2AComponent,
    Lib3AWrapperComponent,
    Lib4AComponent, // imported via a local proxy-file
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-standalone-minimal';
}
