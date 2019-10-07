import { Component } from '@angular/core';

@Component({
  selector: 'page1',
  template: `
    {{ 'page1.text' | transloco }}
    <br>
    <some-lib-counter></some-lib-counter>
  `,
})
export class Page1Component {}
