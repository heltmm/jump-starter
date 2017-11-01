import { JumpStarterPage } from './app.po';

describe('jump-starter App', () => {
  let page: JumpStarterPage;

  beforeEach(() => {
    page = new JumpStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
