var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById("modalTrigger01");
var img02 = document.getElementById("modalTrigger02");
var img03 = document.getElementById("modalTrigger03");
var modalImg = document.getElementById("modalImg");

img01.onclick = function () {
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img02.onclick = function () {
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img03.onclick = function () {
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

modal.onclick = function () {
  modal.style.display = "none";
}