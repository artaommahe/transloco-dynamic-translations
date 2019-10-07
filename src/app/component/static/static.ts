import { Component } from '@angular/core';

@Component({
  selector: 'static-component',
  template: `
    {{ 'static.text' | transloco }}
  `,
})
export class StaticComponent {}
