const { loginUser } = require('./auth');

describe('loginUser function', () => {
    test('returns success for valid email (kyle@gmail.com) and password (123456)', () => {
        expect(loginUser('kyle@gmail.com', '123456')).toBe('Login successful! Welcome to class.');
    });

    test('returns failure for incorrect email', () => {
        expect(loginUser('jay@gmail.com', '123456')).toBe('Login failed. Incorrect email or password.');
    });

    test('returns failure for incorrect password', () => {
        expect(loginUser('kyle@gmail.com', 'wrongpass')).toBe('Login failed. Incorrect email or password.');
    });

    test('returns failure for both incorrect', () => {
        expect(loginUser('dru@example.com', '000000')).toBe('Login failed. Incorrect email or password.');
    });
});