import { AppPage } from './app.po';

describe('AngularBook Login', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Logo AngularBook', () => {
    page.navigateTo();
    expect(page.getLogoText()).toEqual('AngularBook');
  });

  it('Rodapé Angularbook © 2021', () => {
    page.navigateTo();
    expect(page.getFooterText()).toEqual('Angularbook © 2021');
  });

  it('Botão Entrar', () => {
    page.navigateTo();
    expect(page.getButtonEntrarText()).toEqual('Entrar');
  });

  it('Botão Criar conta', () => {
    page.navigateTo();
    expect(page.getButtonCriarContaText()).toEqual('Criar nova conta');
  });

  it('Botão Cadastrar conta', () => {
    page.navigateTo();
    expect(page.getButtonCadastrarContaText()).toEqual('Cadastre-se');
  });


});
