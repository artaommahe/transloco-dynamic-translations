import { Component } from '@angular/core';
import { provideTranslation } from '../../../../translate';

export function en() { return import('./translation/en.json'); }
export function ru() { return import('./translation/ru.json'); }

@Component({
  selector: 'some-lib-counter',
  template: `
    {{ 'someLibCounter.text' | transloco }}
  `,
  providers: [provideTranslation('someLibCounter', { en, ru })],
})
export class CounterComponent {}
