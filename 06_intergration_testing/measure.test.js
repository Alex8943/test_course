// In your test.mjs file
import { Length, Weight, Temperature } from './measure.js';


describe('Length', () => {
    test('should correctly create a length object with two values', () => {
        const length = new Length("inches", 12);
        expect(length.unit).toEqual("inches");
        expect(length.value).toEqual(12);
    });

    test('should correctly convert inches to centimeters', () => {
        const length = new Length("inches", 12);
        expect(length.convert()).toEqual(4.724409448818898);
    });

    test('should correctly convert centimeters to inches', () => {
        const length = new Length("centimeters", 12);
        expect(length.convert()).toEqual(30.48);
    });

    test('should return an error if an unknown unit is passed', () => {
        const length = new Length("yards", 12);
        expect(length.convert()).toEqual("Error: Unknown unit");
    });
});

