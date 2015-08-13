define([
    'scalejs!core', 'scalejs!application'
], function(
    core
) {
    var tabs = core.tabs;

    // For deeper testing, log to console
    console.log('core.tabs: ', tabs);

    describe('core.tabs', function() {

        it('is defined', function() {
            expect(tabs).toBeDefined();
        });

    });
});

