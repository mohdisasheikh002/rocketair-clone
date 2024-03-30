gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);

const scroller = ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
  normalizeScroll: true,
});

ScrollTrigger.refresh();

function gsapCodeScenarios() {
  gsap.to(".nav", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top 70%",
      end: "top 70%",
      scrub: 1,
    },
    top: "-100%",
    ease: Expo.easeIn,
  });

  gsap.to(".row", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top 70%",
      end: "top 50%",
      scrub: 2,
    },
    opacity: 0,
    ease: Expo,
  });

  gsap.to(".sec1 p", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top 70%",
      end: "top 50%",
      scrub: 2,
    },
    opacity: 0,
    ease: Expo,
  });

  ScrollTrigger.create({
    trigger: ".sec1",
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
}

function slideOpenerAnimation() {
  let allSlides = document.querySelectorAll(".sld");
  allSlides = [...allSlides];

  var isHovered = null;

  allSlides.forEach(function (elem) {
    elem.addEventListener("mouseover", function (dets) {
      isHovered = "#opener" + dets.target.dataset.index;
      document.querySelector(isHovered).style.width = "100%";
    });

    elem.addEventListener("mouseleave", function (dets) {
      isHovered = "#opener" + dets.target.dataset.index;
      document.querySelector(isHovered).style.width = "0%";
    });
  });

  document
    .querySelector(".circular")
    .addEventListener("mousemove", function (dets) {
      var bndrectvals = document
        .querySelector(".circular")
        .getBoundingClientRect();
      var xVal = dets.clientX - bndrectvals.x;
      var yVal = dets.clientY - bndrectvals.y;

      document.querySelector(".minicircle").style.top = yVal + "px";
      document.querySelector(".minicircle").style.left = xVal + "px";
      document.querySelector(".minicircle").style.boxShadow =
        "0 0 10px 3px black";
    });

  document
    .querySelector(".circular")
    .addEventListener("mouseleave", function (dets) {
      document.querySelector(".minicircle").style.top = 50 + "%";
      document.querySelector(".minicircle").style.left = 50 + "%";

      document.querySelector(".minicircle").style.boxShadow = "none";
    });
}

function workAnimationCode() {
  ScrollTrigger.create({
    trigger: ".sec7",
    start: "top top",
    pin: true,
    pinSpacing: false,
  });

  gsap.to(".cbholder", {
    scrollTrigger: {
      trigger: ".sec7",
      start: "top top",
      pin: true,
      scrub: 2,
    },
    top: "-250%",
  });
}

function textAnimationCode() {
  document.querySelectorAll(".rowtexts").forEach(function (row) {
    row.innerHTML = `<div class="textwrapper">${row.innerHTML}</div>`;
  });

  document.querySelectorAll(".textwrapper").forEach((txt) => {
    let clutter = "";
    txt.textContent.split(" ").forEach((wrd) => {
      clutter += `<span>${wrd}</span>`;
    });

    txt.innerHTML = clutter;
  });

  gsap.set(".rowtexts span", { y: "200%" });

  document.querySelectorAll(".rowtexts").forEach(function (elem) {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 60%",
      },
      onStart: function () {
        gsap.to(elem.children[0].children, {
          y: 0,
          ease: Power4,
          duration: 0.3,
          stagger: 0.2,
        });
      },
    });
  });
}

gsapCodeScenarios();
slideOpenerAnimation();
workAnimationCode();
// textAnimationCode();
