const calculateBill = require('../src/calculateBill');

describe("calculateBill", () => {
    it('returns bill amount', () => {
        expect(calculateBill(100)).toBe(103.1);
    });

    it('returns the bill amount if floating  is entered', () => {
        expect(calculateBill(50.5)).toBe(53.5505);
    });

    it('throws an error when string is entered', () => {
        expect(calculateBill('hundred')).toBe('Enter Number');
    });
});