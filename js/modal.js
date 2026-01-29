var modal = document.getElementById("myModal");
var next = document.getElementById("modalNext");
var back = document.getElementById("modalBack");
var close = document.getElementById("modalClose");
var modalImg = document.getElementById("modalImg");
var modalTriggers = document.getElementsByName("modal");
var index = 0;

for (var _index = 0; _index < modalTriggers.length; _index++) {
  modalTriggers[_index].onclick = function () {
    modal.style.display = "flex";
    if (this.tagName == "IMG") {
      modalImg.src = this.src;
      modalImg.style.display = "block";
    }
    index = Array.prototype.indexOf.call(modalTriggers, this);
  }
}

modalImg.onclick = function () {
  modal.style.display = "none";
}

modalClose.onclick = function () {
  modal.style.display = "none";
}

next.onclick = function () {
  index += 1;
  if (index >= modalTriggers.length) {
    index = 0;
  }
  if (modalTriggers[index].tagName == "IMG") {
    modalImg.src = modalTriggers[index].src;
    modalImg.style.display = "block"
  }
}

back.onclick = function () {
  index -= 1;
  if (index < 0) {
    index = modalTriggers.length - 1;
  }
  if (modalTriggers[index].tagName == "IMG") {
    modalImg.src = modalTriggers[index].src;
    modalImg.style.display = "block"
  }
}