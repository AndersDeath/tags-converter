import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {AvailableLanguages, STORAGE, ILanguages} from '@tag-converter/tags-converter-core';

/**
 * App root component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Default language
   */
  public lang: string = AvailableLanguages.EN;

  /**
   * Available languages list
   */
  public languages: ILanguages = {
    RU: AvailableLanguages.RU,
    EN: AvailableLanguages.EN,
  };

  /**
   * Class constructor
   * @param translate ngx-translate
   * @param afAuth firebase auth
   */
  constructor(
    public translate: TranslateService,
    public afAuth: AngularFireAuth
  ) {
    translate.addLangs([AvailableLanguages.EN, AvailableLanguages.RU]);
    if (localStorage.getItem(STORAGE.LANGUAGE) === null) {
      this.lang = this.translate.getBrowserLang() as AvailableLanguages;
    } else {
      this.lang = localStorage.getItem(STORAGE.LANGUAGE) as AvailableLanguages;
    }
    translate.setDefaultLang(this.lang);
  }

  /**
   * Angular lifecycle method
   */
  public ngOnInit() {
    // this.login();
  }

  /**
   * Naguage switcher
   * @param code language code
   */
  public changeLang(code: string): void {
    this.translate.setDefaultLang(code);
    localStorage.setItem(STORAGE.LANGUAGE, code);
    this.lang = code;
  }

  /**
   * Login method
   */
  async login() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    const cred = await this.afAuth.signInWithPopup(provider);
    // console.log(cred);
  }
}
