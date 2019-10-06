import { browser, by, element } from 'protractor';

export class AppPageCadastro {
  navigateTo() {
    return browser.get('/login');
  }

  getButtonCriarConta() {
    browser.manage().window().setSize(320, 480);
    return element(by.css('app-main .cadastro .btn.register'));
  }

  getNovaContaText() {
    browser.manage().window().setSize(320, 480);
    return element(by.css('app-main .cadastro__content h2')).getText();
  }

  inputName =  element(by.id('name'));
  inputLastName =  element(by.id('lastname'));
  inputEmail =  element(by.id('email_register'));
  inputPassword =  element(by.id('password_register'));
  inputBirthday =  element(by.id('birthday'));
  inputGender =  element(by.id('gender_man'));
}
