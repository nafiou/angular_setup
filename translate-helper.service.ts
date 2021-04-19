import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import enContent from 'src/assets/i18n/en.json';
import frContent from 'src/assets/i18n/fr.json';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Language } from 'src/_enums/language.enum';

const TRANSLATIONS = {
  en: enContent,
  fr: frContent
} as const;

export class TranslateHelperService implements TranslateLoader {
  getTranslation(lang: string): Observable<string> {
    return of(TRANSLATIONS[lang.toLocaleLowerCase() as 'fr' | 'en']);
  }
}

declare module '@ngx-translate/core/lib/translate.service' {
  interface TranslateService {
    init(): void;
    setLanguage(lang: Language): void;
  }
}

const getLanguages = (): Array<string> => {
  const languages = [];
  for (let a in Language) {
    languages.push(Language[a as 'French' | 'English']);
  }

  return languages;
};

TranslateService.prototype.init = function (this: TranslateService): void {
  const langs = getLanguages();
  this.addLangs(langs);
  this.setDefaultLang(langs[0]);
  if (localStorage.getItem("currentLang") !== null) {
    this.use(localStorage.getItem("currentLang") as string);
  } else {
    this.use(this.getDefaultLang()).subscribe((next) =>
      localStorage.setItem("currentLang", this.currentLang)
    );
  }
};

TranslateService.prototype.setLanguage = function (
  this: TranslateService,
  lang: Language
): void {
  this.use(lang).subscribe((next) =>
    localStorage.setItem("currentLang", this.currentLang)
  );
};