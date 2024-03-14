gsap.registerPlugin(ScrollTrigger);

function locomotiveScroll() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: { smooth: true },
    getDirection: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function slidesHandleKaro() {
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

      document.querySelector("#minicircle").style.top = yVal + "px";
      document.querySelector("#minicircle").style.left = xVal + "px";
      document.querySelector("#minicircle").style.boxShadow =
        "0 0 10px 3px green";
    });

  document
    .querySelector(".circular")
    .addEventListener("mouseleave", function (dets) {
      document.querySelector("#minicircle").style.top = 50 + "%";
      document.querySelector("#minicircle").style.left = 50 + "%";

      document.querySelector("#minicircle").style.boxShadow = "none";
    });
}

function gsapCodeScenarios() {
  gsap.to(".row", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#video",
      start: "top 60%",
      end: "top 10%",
      scrub: 2,
    },
    opacity: 0,
    ease: Expo,
  });
}

function textAnimationCode() {
  document.querySelectorAll(".rowtxts").forEach(function (row) {
    row.innerHTML = `<div class="textwrapper">${row.innerHTML}</div>`;
  });

  document.querySelectorAll(".textwrapper").forEach((txt) => {
    let clutter = "";
    txt.textContent.split(" ").forEach((wrd) => {
      clutter += `<span>${wrd}</span>`;
    });

    txt.innerHTML = clutter;
  });

  gsap.set(".rowtxts span", { y: "200%" });

  document.querySelectorAll(".rowtxts").forEach(function (elem) {
    gsap.from(elem, {
      scrollTrigger: {
        scroller: "#main",
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

function workAnimationCode() {
  gsap.to("#work .card", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#work",
      start: "top 0%",
      scrub: 2,
    },
    top: "-100%",
    ease: Power4,
    stagger: 0.08,
  });
}

locomotiveScroll();
gsapCodeScenarios();
textAnimationCode();
workAnimationCode();
slidesHandleKaro();
