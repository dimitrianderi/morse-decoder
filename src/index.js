const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  // =====================Зашифровываем===================
  // return expr.toLowerCase().split('').map(el => {
  //   if (el === ' ') return '**********';
  //   for (let letter in MORSE_TABLE) {
  //     if (MORSE_TABLE[letter] === el) return '0'.repeat(10 - (word = letter.split('').map(el => (el === '.') ? '10' : '11').join('')).length) + word;
  //   }
  // }).join('');
  // ===================РАСШИФРОВЫВАЕМ=====================
  expr = expr.split('');
  let arr = [];
  for (let i = 0; i < expr.length; i++) {
    if ((i + 10) % 10 === 0) arr.push([]);
    arr[Math.trunc((i + 10) / 10 - 1)].push(expr[i])
  }

  arr = arr.map(el => {
    if (el[0] === '*') return ' ';
    let mini_arr = [];
    for (let j = 0; j < el.length; j += 2) {
      switch (true) {
        case (el[j] === '1' && el[j+1] === '0') :
          mini_data = '.';
          break;
        case (el[j] === '1' && el[j+1] === '1') :
          mini_data = '-';
          break;
        default:
          mini_data = '';
      }
      mini_arr.push(mini_data);
    }
    for (let letter in MORSE_TABLE) {
      if (letter === mini_arr.join('')) return MORSE_TABLE[letter];
    }
  });
  return arr.join('');
}

module.exports = {
    decode
}