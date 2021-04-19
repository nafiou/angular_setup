import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Language } from 'src/_enums/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  selectedLanguage: Language | undefined;
  Language = Language;
  title = 'jool';
  constructor(
    private translateService: TranslateService
  ){
    this.translateService.init()
  }
  ngOnInit(): void {
    this.selectedLanguage = <Language>this.translateService.currentLang;
    this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => (this.selectedLanguage = <Language>event.lang)
    );
  }
  
}
