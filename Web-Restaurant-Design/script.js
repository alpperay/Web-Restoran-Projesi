document.addEventListener("DOMContentLoaded", function () {
  var yukari = document.querySelector(".go-up");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      yukari.classList.add("show");
    } else {
      yukari.classList.remove("show");
    }
  });

  yukari.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
