module.exports = function toReadable(number) {
  const firstDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const secondDigit = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const twenties = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (number == 0) return 'zero';
  let revNumber = number.toString(10).split('').map(Number).reverse();
  let result = revNumber.reduce((acc, item, index, arr) => {
    let combinedDigit = '';

    if (index === 0) {
      if (item === 0) return '';
      combinedDigit = firstDigit[item];
      return combinedDigit;
    };

    if (index === 1) {

      if (item === 0) {
        return acc;
      }

      if (item === 1) {
        combinedDigit = twenties[arr[0]];
        return combinedDigit;
      } else {
        combinedDigit = secondDigit[item] + ((acc.length > 0) ? ' ' : '');
        return combinedDigit + acc;
      }

    };

    if (index === 2) {
      combinedDigit = firstDigit[item] + ' hundred' + ((acc.length > 0) ? ' ' : '');
      return combinedDigit + acc;
    }

    return acc;

  }, '')
  return result;
};