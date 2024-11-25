import { Component } from '@angular/core';
import { Lib1AComponent } from 'lib1';

@Component({
  selector: 'app-proxy-component',
  standalone: true,
  imports: [Lib1AComponent],
  template: `<lib-lib1-a />`,
})
export class Lib1ComponentProxy {}
