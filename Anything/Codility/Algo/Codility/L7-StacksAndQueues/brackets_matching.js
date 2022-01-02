function solution(str) {
  const stack = [];

  for (i = 0; i < str.length; i++) {
    // console.log(stack);
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i])
    }
    else  {
      switch(str[i]) {
        case ']':
          if (stack.length === 0 || stack.pop() !== '[') {
            return 0;
          }
          break;
        case '}':
          if (stack.length === 0 || stack.pop() !== '{') {
            return 0;
          }
          break;
        case ')':
        if (stack.length === 0 || stack.pop() !== '(') {
          return 0;
        }
        break;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

const ans = solution('[{)}]');
console.log(ans)
