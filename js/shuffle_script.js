document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.publication-links');

  // Grab all the individual card elements inside the flex container
  const cards = Array.from(container.children);

  // Randomly shuffle the array of cards
  cards.sort(() => Math.random() - 0.5);
  
  // Re-append each card into the flex container in the new randomized order
  cards.forEach(card => container.appendChild(card));
});