import { caesarCipher } from './caesarCipher';

test('Caesar Cipher for lower case input', () => {
    expect(caesarCipher('abcde')).toEqual('bcdef');
});

test('Caesar Cipher from z to a', () => {
    expect(caesarCipher('az')).toEqual('ba');
});

test('Caesar Cipher maintain case', () => {
    expect(caesarCipher('aBcD')).toEqual('bCdE');
});
