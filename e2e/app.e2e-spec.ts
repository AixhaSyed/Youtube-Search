import { YouTubePage } from './app.po';

describe('you-tube App', function() {
  let page: YouTubePage;

  beforeEach(() => {
    page = new YouTubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
