import { analyzeArray } from './analyze';

const testArray = [1, 8, 3, 4, 2, 6];

test('analyzeArray average', () => {
    expect(analyzeArray(testArray).average).toEqual(4);
});

test('analyzeArray min', () => {
    expect(analyzeArray(testArray).min).toEqual(1);
});

test('analyzeArray max', () => {
    expect(analyzeArray(testArray).max).toEqual(8);
});

test('analyzeArray length', () => {
    expect(analyzeArray(testArray).length).toEqual(6);
});
