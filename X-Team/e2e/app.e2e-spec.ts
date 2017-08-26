import { XTeamPage } from './app.po';

describe('x-team App', () => {
  let page: XTeamPage;

  beforeEach(() => {
    page = new XTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
