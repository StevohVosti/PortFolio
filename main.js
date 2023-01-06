let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};


$(document).ready(function () {

  $(".view-more").on("click", function () {
    $(this).toggleClass("open-view");
    $(".other-projects").toggleClass("open-view");
  });
                                    
$(".up").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    2000
  );
});

AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});
});