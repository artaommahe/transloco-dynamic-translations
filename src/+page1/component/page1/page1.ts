import { Component } from '@angular/core';
import { provideTranslation } from '../../../../libs/translate';

export function en() { return import('./translation/en.json'); }
export function ru() { return import('./translation/ru.json'); }

@Component({
  selector: 'page1',
  template: `
    {{ 'page1.text' | transloco }}
    <br>
    <some-lib-counter></some-lib-counter>
  `,
  providers: [provideTranslation('page1', { en, ru })],
})
export class Page1Component {}
