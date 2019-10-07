import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TRANSLOCO_CONFIG } from '@ngneat/transloco';
import { StaticComponent } from './component/static/static';
import { TranslateModule } from '../../libs/translate';
import { staticTranslations } from './component/static/translation';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'page1', loadChildren: () => import('../+page1/module').then(module => module.Page1Module) },
      { path: 'page2', loadChildren: () => import('../+page2/module').then(module => module.Page2Module) },
    ]),
    TranslocoModule,
    TranslateModule.forChild([
      staticTranslations,
    ]),
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ['en', 'ru'],
        prodMode: false,
        defaultLang: 'en',
        reRenderOnLangChange: true
      }
    },
  ],
  declarations: [
    AppComponent,
    StaticComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
