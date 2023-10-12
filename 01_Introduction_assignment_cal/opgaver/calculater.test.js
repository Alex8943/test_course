const {add, subtract, multiply, divide} = require('./calculater'); 

describe('add', () => {
    let number1 = 1; 
    let number2 = 2;

    beforeAll(() => {
        console.log('beforeAll');
    }); 
    it('adds two numbers', () => {
        expect(add(number1, number2)).toBe(3);
    });
}); 


describe('subtract', () => {
    beforeAll(() => {
        console.log('beforeAll');
    }); 
    it('subtracts two numbers', () => {
        expect(subtract(1, 2)).toBe(-1);
    });
});

describe('multiply', () => {
    beforeAll(() => {
        console.log('beforeAll');
    }); 
    it('multiplies two numbers', () => {
        expect(multiply(1, 2)).toBe(2);
    });
});

describe('divide', () => {
    beforeAll(() => {
        console.log('beforeAll');
    }); 
    it('divides two numbers', () => {
        expect(divide(10, 5)).toBe(2);
    });
});

