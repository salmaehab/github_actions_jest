const addition = require('./addition');
test('addition 4 + 2 to equal 6', () => {
   expect(addition(4, 2)).toBe(6);
});