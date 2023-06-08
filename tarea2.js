function checkPalindrome() {
    const wordInput = document.getElementById('word');
    const palindromeResult = document.getElementById('palindromeResult');

    const word = wordInput.value.toLowerCase();
    const reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
      palindromeResult.textContent = 'La palabra es un palíndromo.';
    } else {
      palindromeResult.textContent = 'La palabra no es un palíndromo.';
    }
  }

  function replaceVowels() {
    const fullNameInput = document.getElementById('fullName');
    const charInput = document.getElementById('char');
    const replaceVowelsResult = document.getElementById('replaceVowelsResult');

    const fullName = fullNameInput.value;
    const char = charInput.value;
    const modifiedName = fullName.replace(/[aáeéiíoóuú]/gi, char);

    replaceVowelsResult.textContent = modifiedName;
  }

  function calculateAge() {
    const fullNameInput = document.getElementById('Name');
    const birthdateInput = document.getElementById('birthdate');
    const calculateAgeResult = document.getElementById('calculateAgeResult');

    const fullName = fullNameInput.value;
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    calculateAgeResult.textContent = 'Tu nombre es ' + fullName + ', tienes ' + age + ' años.';
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function showPrimes() {
    const primesDiv = document.getElementById('primes');
    primesDiv.textContent = '';

    for (let i = 1; i <= 100; i++) {
      if (isPrime(i)) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.textContent = i;
        primesDiv.appendChild(circle);
      }
    }
  }