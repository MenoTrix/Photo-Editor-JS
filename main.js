let saturate = document.querySelector("#saturate");
let contrast = document.querySelector("#contrast");
let brightness = document.querySelector("#brightness");
let sepia = document.querySelector("#sepia");
let grayScale = document.querySelector("#greyscale");
let blury = document.querySelector("#blur");
let hueRotate = document.querySelector("#hue-rotate");
let img = document.querySelector("#img");
let upload = document.querySelector("#upload");
// let upload = document.getElementById("upload").files[0];
let download = document.querySelector("#download");
let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");
let canvas=document.querySelector("canvas")
const ctx=canvas.getContext('2d')
window.onload = function () {
  imgBox.style.display = "none";
  download.style.display = "none";
  reset.style.display = "none";
};

function resetSettings() {
  img.style.filter = "none";
  saturate.value = 100;
  contrast.value = 100;
  brightness.value = 100;
  sepia.value = 0;
  grayScale.value = 0;
  blury.value = 0;
  hueRotate.value = 0;
}
reset.onclick = function () {
  resetSettings();
};
upload.onchange = function () {

  resetSettings();
  imgBox.style.display = "block";
  download.style.display = "block";
  reset.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload=function(){
    canvas.width=img.width
    canvas.height=img.height
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
    img.style.display="none"
  }
};
// saturate.onchange = function () {
//   console.log(saturate.value);
//   img.style.filter = `saturate(${saturate.value}%)`;
// };

let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayScale.value})
    blur(${blury.value}px)
    hue-rotate(${hueRotate.value}deg)
    `;
    ctx.drawImage(img,0,0,canvas.width,canvas.height)

  });

});

download.onclick = function () {
  download.href=canvas.toDataURL();
};
