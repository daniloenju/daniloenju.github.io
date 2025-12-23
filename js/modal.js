var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalTriggers = document.getElementsByClassName("modaltrigger")
var modalTriggersAlt = document.getElementsByClassName("modaltriggerAlt")
var modalTriggersSquare = document.getElementsByClassName("modaltriggerSquare")
var modalTriggersVideo = document.getElementsByClassName("modaltriggerVideo")
var modalTriggersLarge = document.getElementsByClassName("modaltriggerLarge")
var modalTriggersMedium = document.getElementsByClassName("modaltriggerMedium")
var modalImg = document.getElementById("modalImg");
var modalVideo = document.getElementById("modalVideo");

for (var index = 0; index < modalTriggers.length; index++) {
  modalTriggers[index].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
    mybutton.classList.remove("active");
  }
}
for (var index = 0; index < modalTriggersAlt.length; index++) {
  modalTriggersAlt[index].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
    mybutton.classList.remove("active");
  }
}

for (var index = 0; index < modalTriggersSquare.length; index++) {
  modalTriggersSquare[index].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
    mybutton.classList.remove("active")
  }
}

for (var index = 0; index < modalTriggersVideo.length; index++) {
  modalTriggersVideo[index].onclick = function () {
    modal.style.display = "flex";
    modalVideo.src = this.firstElementChild.src;
    modalImg.style.display = "none"
    modalVideo.style.display = "block"
    mybutton.classList.remove("active");
  }
}

for (var index = 0; index < modalTriggersLarge.length; index++) {
  modalTriggersLarge[index].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
    mybutton.classList.remove("active");
  }
}

for (var index = 0; index < modalTriggersMedium.length; index++) {
  modalTriggersMedium[index].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
    mybutton.classList.remove("active");
  }
}

modal.onclick = function () {
  modal.style.display = "none";
  mybutton.classList.add("active");
}