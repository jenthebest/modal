// The two buttons
var showButton = document.getElementById("modal-show-button");
var hideButton = document.getElementById("modal-hide-button");

// when the buttons are clicked, called functions by name
showButton.onclick = showModal;
hideButton.onclick = hideModal;

// this is the modal element 
var modal = document.getElementById("my-modal");

// this function shows the modal
function showModal() {
	modal.style.display = 'block';
}

// this function hides the modal
function hideModal() {
	modal.style.display = 'none';
}