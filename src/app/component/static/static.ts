import { Component } from '@angular/core';
import { provideTranslation } from '../../../../libs/translate';

export function en() { return import('./translation/en.json'); }
export function ru() { return import('./translation/ru.json'); }

@Component({
  selector: 'static-component',
  template: `
    {{ 'static.text' | transloco }}
  `,
  providers: [provideTranslation('static', { en, ru })],
})
export class StaticComponent {}
