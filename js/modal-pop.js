// TOBI MODAL
const modal = document.getElementById("myModal1");
const btn = document.getElementById("modal1");
const span = document.getElementsByClassName("close-1")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// MICAH MODAL
const modalMicah = document.getElementById("myModal2");
const btnMicah = document.getElementById("modal2");
const spanMicah = document.getElementsByClassName("close-2")[0];

// When the user clicks on the button, open the modal
btnMicah.onclick = function() {
  modalMicah.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanMicah.onclick = function() {
  modalMicah.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalMicah) {
    modalMicah.style.display = "none";
  }
}


// Sharon MODAL
const modalSharon = document.getElementById("myModal3");
const btnSharon = document.getElementById("modal3");
const spanSharon = document.getElementsByClassName("close-3")[0];

// When the user clicks on the button, open the modal
btnSharon.onclick = function() {
  modalSharon.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSharon.onclick = function() {
  modalSharon.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSharon) {
    modalSharon.style.display = "none";
  }
}