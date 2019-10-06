import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/login');
  }

  getLogoText() {
    return element(by.css('app-header .logo')).getText();
  }

  getButtonEntrarText() {
    return element(by.css('app-header .login button')).getText();
  }

  getButtonCriarContaText() {
    browser.manage().window().setSize(320, 480);
    return element(by.css('app-main .cadastro .btn.register')).getText();
  }

  getButtonCadastrarContaText() {
    browser.manage().window().setSize(1000, 600);
    return element(by.css('app-main .cadastro button[type="submit"]')).getText();
  }

  getFooterText() {
    return element(by.css('app-footer .footer small')).getText();
  }
}
