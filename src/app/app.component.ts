import { Component, inject } from '@angular/core';
import { Lib1AComponent } from 'lib1';
import { Lib2AComponent } from 'lib2';
import { Lib3AWrapperComponent } from './lib3-a-WRAPPER.component';
import { Lib4AWrapperModule } from './lib4-a-WRAPPER.module';
import { C001Component } from 'fine-grained-lib/src/lib/c001';
import { AService as AService_fromSecondaryEntryPoint } from 'fine-grained-lib/src/lib/a-service';
import { AService as AService_fromRootEntryPoint } from 'fine-grained-lib';

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

  spike = C001Component;

  aService_rootEntryPoint = inject(AService_fromRootEntryPoint);
  aService_secondaryEntryPoint = inject(AService_fromSecondaryEntryPoint);

  ngOnInit() {
    const instanceCounters = {
      aService_rootEntryPoint: this.aService_rootEntryPoint,
      aService_secondaryEntryPoint: this.aService_secondaryEntryPoint,
      // in prod build they are not the same
      areTheyTheSame:
        this.aService_rootEntryPoint === this.aService_secondaryEntryPoint,
    };
    console.log(instanceCounters);
  }
}
