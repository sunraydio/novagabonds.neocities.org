
function openModal(modalId, index) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.classList.add("show");
  let message = modal.querySelector(".message");
  message.innerText = 
        `You clicked on the ${index} image.`;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".message").innerText = "";
  }, 300);
}
        
var modaldoc = document.querySelector('modalId');

// Handle click on the modal container
modaldoc.addEventListener('click', modalClose, false);

// Prevent event bubbling if click occurred within modal content body
modaldoc.children[0].addEventListener('click', function(e) {
    e.stopPropagation();
}, false);
        
        