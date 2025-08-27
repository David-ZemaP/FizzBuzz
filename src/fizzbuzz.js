function IsMultipleof3(n) {
  return n % 3 === 0;
}

function IsMultipleof5(n) {
  return n % 5 === 0;
}

export function ConvertFizzBuzz(n) {
  if (IsMultipleof3(n)) {
    return 'Fizz';
  }
  if (IsMultipleof5(n)) {
    return 'Buzz';
  }
  return `${n}`;
}
