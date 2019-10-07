import { Component } from '@angular/core';

@Component({
  selector: 'page2',
  template: `
    {{ 'page2.text' | transloco }}
  `,
})
export class Page2Component {}
