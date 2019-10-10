import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { Page2Component } from './component/page2/page2';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: Page2Component }
    ]),
    TranslocoModule,
  ],
  declarations: [Page2Component],
})
export class Page2Module {}
