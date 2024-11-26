import { Component } from '@angular/core';
import { Lib1AComponent } from 'lib1';
import { Lib2AComponent } from 'lib2';
import { Lib3AWrapperComponent } from './lib3-a-WRAPPER.component';
import { Lib4AWrapperModule } from './lib4-a-WRAPPER.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Lib1AComponent,
    Lib2AComponent,
    Lib3AWrapperComponent,
    Lib4AWrapperModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-standalone-minimal';
}
