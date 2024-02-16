

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('check-btn').addEventListener('click', checkPalindrome);
  });

  function checkPalindrome() {
    const inputText = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    // Check if the input is empty
    if (!inputText.trim()) {
      alert('Please input a value');
      return;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInput = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if it's a palindrome
    const isPalindrome = cleanInput === cleanInput.split('').reverse().join('');

    // Display the result
    resultElement.textContent = isPalindrome
      ? `${inputText} is a palindrome`
      : `${inputText} is not a palindrome`;
  }

  let checkBtn = document.getElementById("check-btn");
  checkBtn.addEventListener('click', (e) => {
        e.preventDefault()
  })