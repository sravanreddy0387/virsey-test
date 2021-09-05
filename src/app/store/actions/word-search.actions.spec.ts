import * as fromWordSearch from './word-search.actions';

describe('wordSearchWordSearchs', () => {
  it('should return an action', () => {
    expect(fromWordSearch.wordSearchWordSearchs().type).toBe('[WordSearch] WordSearch WordSearchs');
  });
});
