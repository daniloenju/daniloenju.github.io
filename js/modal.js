var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById("modalTrigger01");
var img02 = document.getElementById("modalTrigger02");
var img03 = document.getElementById("modalTrigger03");
var img04 = document.getElementById("modalTrigger04");
var img05 = document.getElementById("modalTrigger05");
var img06 = document.getElementById("modalTrigger06");
var img07 = document.getElementById("modalTrigger07");
var img08 = document.getElementById("modalTrigger08");
var img09 = document.getElementById("modalTrigger09");
var modalImg = document.getElementById("modalImg");

if(img01)
{
  img01.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

if(img02)
{
  img02.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}
if(img03)
{
  img03.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

if(img04)
{
  img04.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

if(img05)
{
  img05.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

if(img06)
{
  img06.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

if(img07)
{
  img07.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

if(img08)
{
  img08.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

if(img09)
{
  img09.onclick = function () 
  {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}
modal.onclick = function () {
  modal.style.display = "none";
}