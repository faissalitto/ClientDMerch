import { ClientDMerchPage } from './app.po';

describe('client-dmerch App', function() {
  let page: ClientDMerchPage;

  beforeEach(() => {
    page = new ClientDMerchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
