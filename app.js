const inputField = document.querySelector('input');
const remainingCharsElement = document.querySelector('#remaining-chars');
const characterMax = inputField.maxLength;

function updateRemainingChars(e) {
  // updates what characters will be put inside the input field
  const updatedText = e.target.value;

  // checks the maximum length of the input field
  const enteredTextLength = updatedText.length;

  // does an equation to find the remaning characters
  const remainingChars = characterMax - enteredTextLength;
  remainingCharsElement.textContent = remainingChars;
}

inputField.addEventListener('input', updateRemainingChars);
