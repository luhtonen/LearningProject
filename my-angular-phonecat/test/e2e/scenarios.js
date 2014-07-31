describe('PhoneCat App', function() {
    describe('Phone list view', function() {
        beforeEach(function() {
            browser.get('/');
        });

        var phoneList = element.all(by.repeater('phone in phones'));
        var query = element(by.model('query'));

        it('should filter the phone list as user types into the search box', function() {

            expect(phoneList.count()).toBe(3);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(2);
        });

        it('should display the current filter value in the title bar', function() {
            query.clear();
            expect(browser.getTitle()).toMatch(/Google Phone Gallery$/);
        });
    });
});