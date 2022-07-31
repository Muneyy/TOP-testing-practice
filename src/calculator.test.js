import { calculator } from './calculator';

test('Calculator add', () => {
    expect(calculator.add(2, 3)).toEqual(5);
});

test('Calculator subtract', () => {
    expect(calculator.subtract(2, 3)).toEqual(-1);
});

test('Calculator multiply', () => {
    expect(calculator.multiply(2, 4)).toEqual(8);
});

test('Calculator divide', () => {
    expect(calculator.divide(6, 3)).toEqual(2);
});
