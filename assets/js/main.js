console.log("This site was generated by Hugo.");

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".nav-link:not(.active)").forEach((navLink) => {
    navLink.addEventListener("mousedown", function () {
      this.classList.add("nav-link-pressed");
    });
    navLink.addEventListener("pointerup", function () {
      this.classList.remove("nav-link-pressed");
    });
    navLink.addEventListener("pointerleave", function () {
      this.classList.remove("nav-link-pressed");
    });
  });

  document.querySelectorAll(".social-icon-container").forEach((socialIcon) => {
    const socialIconHover = socialIcon.querySelector(".social-icon-hover");

    socialIcon.addEventListener("mousedown", function () {
      socialIconHover.classList.add("social-icon-hover-active");
    });
    socialIcon.addEventListener("pointerup", function () {
      socialIconHover.classList.remove("social-icon-hover-active");
    });
    socialIcon.addEventListener("pointerleave", function () {
      socialIconHover.classList.remove("social-icon-hover-active");
    });
  });

  document
    .querySelectorAll(".menu-social-icon-container")
    .forEach((socialIcon) => {
      const socialIconHover = socialIcon.querySelector(
        ".menu-social-icon-hover"
      );

      socialIcon.addEventListener("mousedown", function () {
        socialIconHover.classList.add("menu-social-icon-hover-active");
      });
      socialIcon.addEventListener("pointerup", function () {
        socialIconHover.classList.remove("menu-social-icon-hover-active");
      });
      socialIcon.addEventListener("pointerleave", function () {
        socialIconHover.classList.remove("menu-social-icon-hover-active");
      });

      document
        .getElementById("hamburger-open")
        .addEventListener("click", function () {
          document.getElementById("sidebar").classList.add("active");
        });
      document
        .getElementById("hamburger-close")
        .addEventListener("click", function () {
          document.getElementById("sidebar").classList.remove("active");
        });
    });
});
