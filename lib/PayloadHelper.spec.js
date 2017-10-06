const { expect } = require('chai');
const { PayloadHelper } = require('./PayloadHelper');

describe('PayloadHelper', function() {
    describe('#payload()', function() {
        it('should return the payload', function() {
            expect(PayloadHelper.payload()).to.equal(JSON.stringify(['hello', 'payload']))
        });
    });
});