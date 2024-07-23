const menuBtn = document.querySelector(".lucide-menu");
const closeBtn = document.querySelector(".lucide-x");
const sidebar = document.querySelector(".sidebar");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden");
  sidebar.style.left = "0";
  sidebar.style.transition = "all ease-in 0.3s";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-16rem";
  sidebar.style.transition = "all ease-in 0.3s";
  setTimeout(() => {
    menuBtn.classList.remove("hidden");
  }, 300);
});
