const copyCiteButtons = document.querySelectorAll('.copy-cite-button');

copyCiteButtons.forEach((copyCiteButton, index) => {
  copyCiteButton.addEventListener('click', () => {
    // Copy the code to the user's clipboard
    window.navigator.clipboard.writeText(copyCiteButton.getAttribute("data-citation"));

    // Update the button text visually
    const { innerText: originalText } = copyCiteButton;
    copyCiteButton.innerText = 'Copied!';

    // (Optional) Toggle a class for styling the button
    copyCiteButton.classList.add('copied');

    // After 2 seconds, reset the button to its initial UI
    setTimeout(() => {
      copyCiteButton.innerText = originalText;
      copyCiteButton.classList.remove('copied');
    }, 2000);
  });
});
