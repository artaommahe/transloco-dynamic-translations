import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslateModule } from 'libs/translate';
import { counterTranslations } from './component/counter/translation';
import { CounterComponent } from './component/counter/counter';

@NgModule({
  imports: [
    TranslocoModule,
    TranslateModule.forChild([
      counterTranslations,
    ]),
  ],
  providers: [
    /* registerTranslations([
      counterTranslations,
    ]), */
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class SomeLibModule {}
