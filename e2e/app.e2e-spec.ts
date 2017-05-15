import { Angular2PortfolioPage } from './app.po';

describe('angular2-portfolio App', function() {
  let page: Angular2PortfolioPage;

  beforeEach(() => {
    page = new Angular2PortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
