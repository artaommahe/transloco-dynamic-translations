import { Component } from '@angular/core';

@Component({
  selector: 'some-lib-counter',
  template: `
    {{ 'someLibCounter.text' | transloco }}
  `,
})
export class CounterComponent {}
