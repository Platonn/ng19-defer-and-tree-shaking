import { Component } from '@angular/core';
import { Lib3AComponent } from 'lib3';

@Component({
  selector: 'app-lib3-a-wrapper',
  standalone: true,
  imports: [Lib3AComponent],
  template: `<lib-lib3-a />`,
})
export class Lib3AWrapperComponent {}
