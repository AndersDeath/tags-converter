import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TagConverter';
  public lang = 'en';

  constructor(
    public translate: TranslateService, ) {
        translate.addLangs(['en', 'ru']);
        if (localStorage.getItem('language') === null) {
      this.lang = this.translate.getBrowserLang();
    } else {
      this.lang = localStorage.getItem('language');
    }
        translate.setDefaultLang(this.lang);
  }

    changeLang(code) {
    this.translate.setDefaultLang(code);
    this.lang = code;
    localStorage.setItem('language', code);
  }
}
