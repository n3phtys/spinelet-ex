import { SpineletExPage } from './app.po';

describe('spinelet-ex App', function() {
  let page: SpineletExPage;

  beforeEach(() => {
    page = new SpineletExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
