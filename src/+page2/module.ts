import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { Page2Component } from './component/page2/page2';
import { TranslateModule } from 'libs/translate';
import { page2Translations } from './component/page2/translation';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: Page2Component }
    ]),
    TranslocoModule,
    TranslateModule.forChild([
      page2Translations,
    ]),
  ],
  declarations: [Page2Component],
})
export class Page2Module {}
