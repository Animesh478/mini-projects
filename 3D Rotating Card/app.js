const back = document.querySelector(".back");
const front = document.querySelector(".front");
document.querySelector(".front").addEventListener("click", function () {
  this.style.transform = "rotateY(180deg)";
  back.style.transform = "rotateY(0)";
});

back.addEventListener("click", function () {
  this.style.transform = "rotateY(-180deg)";
  front.style.transform = "rotateY(0)";
});
