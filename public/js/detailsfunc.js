// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Select all <details> elements
  const detailsElements = document.querySelectorAll('details');
 
  // Add toggle event listener to each details element
  detailsElements.forEach(details => {
    details.addEventListener('toggle', () => {
      // Check if the current details is open
      if (details.open) {
        // Close all other details elements
        detailsElements.forEach(otherDetails => {
          if (otherDetails !== details) {
            otherDetails.open = false;
          }
        });
      }
    });
  });
});