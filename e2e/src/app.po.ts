import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getItWorksText() {
    return element(by.css('tl-it-works')).getText() as Promise<string>;
  }

}