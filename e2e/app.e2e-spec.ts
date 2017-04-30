import { UnsubscribePage } from './app.po';

describe('unsubscribe App', () => {
  let page: UnsubscribePage;

  beforeEach(() => {
    page = new UnsubscribePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
