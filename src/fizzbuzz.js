function IsMultipleof3(n) {
  return n % 3 === 0;
}

export function ConvertFizzBuzz(n) {
  if (IsMultipleof3(n)) {
    return 'Fizz';
  }
  return `${n}`;
}
