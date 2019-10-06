import { AppPageCadastro } from './appCadastro.po';

describe('AngularBook Cadastro', () => {
  let page: AppPageCadastro;

  beforeEach(() => {
    page = new AppPageCadastro();
  });

  it('Título Abra uma conta', () => {
    page.navigateTo();
    page.getButtonCriarConta().click();

    expect(page.getNovaContaText()).toEqual('Abra uma conta');
  });

  it('Cadastro Básico', () => {
    page.navigateTo();
    page.getButtonCriarConta().click();

    page.inputName.sendKeys("Lucas")
    page.inputLastName.sendKeys("Ferreira de Lima")
    page.inputEmail.sendKeys("lucasferreiralimax@gmail.com")
    page.inputPassword.sendKeys("lucas123")
    page.inputBirthday.sendKeys("21091994")
    page.inputGender.click();

    expect(page.inputName.getAttribute('value')).toEqual('Lucas');
    expect(page.inputLastName.getAttribute('value')).toEqual('Ferreira de Lima');
    expect(page.inputEmail.getAttribute('value')).toEqual('lucasferreiralimax@gmail.com');
    expect(page.inputPassword.getAttribute('value')).toEqual('lucas123');
    expect(page.inputBirthday.getAttribute('value')).toEqual('1994-09-21');
    expect(page.inputGender.getAttribute('value')).toEqual('man');
  });

});
