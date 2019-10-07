import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { Page1Component } from './component/page1/page1';
import { TranslateModule } from 'libs/translate';
import { page1Translations } from './component/page1/translation';
import { SomeLibModule } from 'libs/some-lib';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: Page1Component }
    ]),
    TranslocoModule,
    TranslateModule.forChild([
      page1Translations,
    ]),
    SomeLibModule,
  ],
  declarations: [Page1Component],
})
export class Page1Module {}
