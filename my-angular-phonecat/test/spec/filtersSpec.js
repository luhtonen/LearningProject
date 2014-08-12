describe('filter', function() {

    beforeEach(module('phonecatFilters'));

    describe('checkmark', function() {
        it('should convert boolean values to unicode checkmark and cross',
        inject(function(checkmarkFilter) {
            expect(checkmarkFilter(true)).toBe('\u2713');
            expect(checkmarkFilter(false)).toBe('\u2718');
        }));
    });
});