module.exports = function check(str, bracketsConfig) {
  var array = [];
  var l = str.length;
  var i, symbol, expected;

  var opening = ['[', '{', '(', '|', '1', '3', '5', '7', '8'];
  var closing = [']', '}', ')', '|', '2', '4', '6', '7', '8'];

  for (i = 0; i < l; i++) {
    symbol = str[i];

    if (opening.indexOf(symbol) > -1) {
      array.push(symbol);
    }
    else if (closing.indexOf(symbol) > -1) {
      expected = opening[closing.indexOf(symbol)];
        if (array.length === 0 || (array.pop() !== expected)) {
        return false;
      };
    };
};
};
