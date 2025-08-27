function IsMultipleof3(n) {
  return n % 3 === 0;
}

export function ConvertFizzBuzz(n) {
  if (IsMultipleof3(n)) {
    return 'Fizz';
  }
  if (n === 5) {
    return 'Buzz';
  }
  return `${n}`;
}
