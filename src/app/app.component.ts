import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AnimationOptions } from 'ngx-lottie';
import { Observable } from 'rxjs';
import { Language } from 'src/_enums/language.enum';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  selectedLanguage: Language | undefined;
  Language = Language;
  title = 'jool';
  loader$?: Observable<boolean | undefined>
  options: AnimationOptions = {
    path: '../assets/lottie/loader.json'
  }
  constructor(
    private translateService: TranslateService,
    private appservice: AppService
  ){
    this.translateService.init()

  }
  ngOnInit(): void {
    this.selectedLanguage = <Language>this.translateService.currentLang;
    this.loader$ = this.appservice.loader$
    this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => (this.selectedLanguage = <Language>event.lang)
    );
  }
  
}
