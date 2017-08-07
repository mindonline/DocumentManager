import { DocumentManagerPage } from './app.po';

describe('document-manager App', () => {
  let page: DocumentManagerPage;

  beforeEach(() => {
    page = new DocumentManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
