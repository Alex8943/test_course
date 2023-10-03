const {validation, password_check}= require('./check.js');

describe('validation', () => {
    beforeAll(() => {
        console.log('beforeAll');
    }); 
    it('validates two numbers', () => {
        expect(validation(1, 10)).toBe(true);
    }), 
    it('validates two numbers', () => {
        expect(validation(1, 11)).toBe(false);
    }), 
    it('validates two numbers', () => {
        expect(validation(21, 28)).toBe(true);
    }),
    it('validates two numbers', () => {
    expect(validation(19, 32)).toBe(false);
    });
});

describe('password_check', () => {
    beforeAll(() => {
        console.log('beforeAll');
    });
    it('validates password', () => {
        expect(password_check('123456')).toBe(true);
    }), 
    it('validates password', () => {
        expect(password_check('12345')).toBe(false);
    }); 
}); 