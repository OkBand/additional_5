module.exports = function check(str, bracketsConfig) {
  var opening = ['[', '{', '(', '|', '1', '3', '5', '7', '8'];
  var closing = [']', '}', ')', '|', '2', '4', '6', '7', '8'];
  var brStack = [];
  var length = str.length;
  var stackItem, brMatch;

  for (i = 0; i < length; i++) {
    stackItem = str[i];

    if (opening.indexOf(stackItem) > -1) {
      brStack.push(stackItem);
    }
    if (closing.indexOf(stackItem) > -1) {
      brMatch = opening[closing.indexOf(stackItem)];
      if (brStack.length === 0 || (brStack.pop() !== brMatch)){
        return false;
      };
    };
  };
    return (brStack.length === 0) ? true : false;
};
