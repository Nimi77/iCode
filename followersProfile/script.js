const followBtn = document.querySelectorAll(".follow-btn");

for (i = 0; i < followBtn.length; i++) {
  followBtn[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
