import { Component } from '@angular/core';
import { Lib4AComponent } from 'lib4';

@Component({
  selector: 'lib-lib1-a',
  standalone: true,
  imports: [Lib4AComponent],
  template: `
    <p>lib1-a works!</p>

    <hr />

    4. Defer-loaded local lib4-a-component VIA a simple proxy-file
    <br />
    @defer (on interaction) {
    <lib-lib4-a />
    } @placeholder {
    <div>
      SPIKE click me to load deferred - lib4-a-component VIA a proxy-file
    </div>
    }

    <hr />
  `,
  styles: ``,
})
export class Lib1AComponent {}
