function convertToRoman(num) {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let answer = '';
  numbers.forEach(function(number, i) {
     while (num >= number) {
       answer += roman[i];
       num -= number;
     }
  });

  return answer;
}

convertToRoman(36);
