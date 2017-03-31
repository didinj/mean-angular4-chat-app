import { MeanChatPage } from './app.po';

describe('mean-chat App', () => {
  let page: MeanChatPage;

  beforeEach(() => {
    page = new MeanChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
