import { Injectable } from '@angular/core';

let instanceCounter = 0;

@Injectable({
  providedIn: 'root',
})
export class AService {
  instanceCounter = ++instanceCounter;

  constructor() {
    console.log('AService constructor', this.instanceCounter);
  }
}
