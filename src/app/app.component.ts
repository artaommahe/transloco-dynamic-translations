import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translocoService: TranslocoService) {}

  public setLang(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }
}
