function IsMultipleof3(n) {
  return n % 3 === 0;
}

function IsMultipleof5(n) {
  return n % 5 === 0;
}

function IsMultipleof3And5(n) {
  return IsMultipleof3(n) && IsMultipleof5(n);
}

export function ConvertFizzBuzz(n) {
  if (IsMultipleof3And5(n)) {
    return 'FizzBuzz';
  }
  if (IsMultipleof3(n)) {
    return 'Fizz';
  }
  if (IsMultipleof5(n)) {
    return 'Buzz';
  }
  return `${n}`;
}

export function generateFizzBuzzString(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += 'n';
    if (i < n) {
      result += ' ';
    }
  }
  return result;
}
