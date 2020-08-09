import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TagConverter';
  public lang = 'en';

  constructor(
    public translate: TranslateService,
    public afAuth: AngularFireAuth
    ) {
      translate.addLangs(['en', 'ru']);
      if (localStorage.getItem('language') === null) {
        this.lang = this.translate.getBrowserLang();
      } else {
        this.lang = localStorage.getItem('language');
      }
      translate.setDefaultLang(this.lang);
    }

    ngOnInit() {
      this.login();
  }

  public changeLang(code) {
    this.translate.setDefaultLang(code);
    this.lang = code;
    localStorage.setItem('language', code);
  }

  async login() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    const cred = await this.afAuth.signInWithPopup(provider);
    console.log(cred);
  }
}
