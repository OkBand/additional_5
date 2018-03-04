module.exports = function check(str, bracketsConfig) {
  var opening = ['[', '{', '(', '1', '3', '5'];
  var closing = [']', '}', ')', '2', '4', '6'];
  var equal = ['|', '7', '8'];

  var brStack = [];
    var length = str.length;
    var stackItem, brMatch, peek;

    for (i = 0; i < length; i++) {
      stackItem = str[i];

      if (opening.indexOf(stackItem) > -1) {
        brStack.push(stackItem);
      }
      else if (closing.indexOf(stackItem) > -1) {
        brMatch = opening[closing.indexOf(stackItem)];
        if (brStack.length === 0 || (brStack.pop() !== brMatch)){
        return false;
        };
      }
      else if (equal.indexOf(stackItem) > -1) {
        peek = brStack[brStack.length - 1];
        if (peek !== stackItem) {
            brStack.push(stackItem);
          }
        else {
          brStack.pop();
        };
        };
    };
      return (brStack.length === 0) ? true : false;
};
