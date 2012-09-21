var palindrome = require('../lib/palindrome.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['test'] = {
  'correctly matches palindrome string': function (test) {
    test.expect(1);
    test.ok(palindrome.test('Was it a car or a cat I saw?'));
    test.done();
  },
  'correctly matches non-palindrom strings': function (test) {
    test.expect(1);
    test.equal(palindrome.test('This is not a palindrome'), false);
    test.done();
  },
  'returns false when passed a blank string': function (test) {
    test.expect(1);
    test.equal(palindrome.test(''), false);
    test.done();
  },
  'returns false when passed only non-alphanumeric characters': function (test) {
    test.expect(1);
    test.equal(palindrome.test(' ?.,  '), false);
    test.done();
  },
  'returns false when passed non-string values': function (test) {
    test.expect(2);
    test.equal(palindrome.test(1234), false, 'should not accept numbers');
    test.equal(palindrome.test(), false, 'should not accept undefined');
    test.done();
  }
};
