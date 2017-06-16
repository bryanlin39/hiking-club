import { HikingClubPage } from './app.po';

describe('hiking-club App', () => {
  let page: HikingClubPage;

  beforeEach(() => {
    page = new HikingClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
