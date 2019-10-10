import { Component } from '@angular/core';
import { provideTranslation } from '../../../../libs/translate';

export function en() { return import('./translation/en.json'); }
export function ru() { return import('./translation/ru.json'); }

@Component({
  selector: 'page2',
  template: `
    {{ 'page2.text' | transloco }}
  `,
  providers: [provideTranslation('page2', { en, ru })],
})
export class Page2Component {}
