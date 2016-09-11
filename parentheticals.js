// Given a string with parentheses and an index of a starting position, find the closing paren
module.exports = function(str, position) {
  if (str.charAt(position) !== '(') {
    return 'Position must be an opening paren';
  }

  var parens = [];
  for (var i = position; i < str.length; i++) {
    var char = str.charAt(i);

    if (char === '(') {
      parens.push(char);
    }

    if (char === ')') {
      parens.pop(char);
      if (parens.length === 0) {
        return i;
      }
    }
  }
};