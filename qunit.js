function palindrome(number) {
    valNum = parseInt(number);
    
    return valNum ; 
  }

QUnit.test("palindrome", function(assert) {
    assert.equal(palindrome(121),  "121");
    assert.equal(palindrome(131),  "131");
    assert.equal(palindrome(1331),  "1331");
    assert.equal(palindrome(1001001),  "1001001");
    assert.equal(palindrome(12121),  "12121");
 });

