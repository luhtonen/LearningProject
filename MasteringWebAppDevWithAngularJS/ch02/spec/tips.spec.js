describe('tips & tricks', function() {
  xdescribe('none of the tests here will execute', function () {
    it('wont execute - spec level', function() {
    });
    xit('wont execute - test level', function() {
    });
  });
  describe('suite with one test selected', function () {
    it('will execute only this test', function() {});
    xit('will be executed only after removing iit', function() {});
  });
});