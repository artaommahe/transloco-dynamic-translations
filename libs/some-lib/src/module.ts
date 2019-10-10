import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { CounterComponent } from './component/counter/counter';

@NgModule({
  imports: [
    TranslocoModule,
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class SomeLibModule {}
