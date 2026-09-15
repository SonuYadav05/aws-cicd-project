const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../app');

test('should add two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
});

test('should add negative numbers', () => {
    assert.strictEqual(add(-2, -3), -5);
});