import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {AvailableLanguages, STORAGE, ILanguages} from '@tag-converter/tags-converter-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public lang: string = AvailableLanguages.EN;

  public languages: ILanguages = {
    RU: AvailableLanguages.RU,
    EN: AvailableLanguages.EN,
  };

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

  public ngOnInit() {
    // this.login();
  }

  public changeLang(code: string): void {
    this.translate.setDefaultLang(code);
    localStorage.setItem(STORAGE.LANGUAGE, code);
    this.lang = code;
  }

  async login() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    const cred = await this.afAuth.signInWithPopup(provider);
    console.log(cred);
  }
}
