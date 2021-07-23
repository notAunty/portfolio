$('document').ready(main);

function main() {
  // NIGHT MODE
  const body = document.querySelector("body");
  const toggle = document.getElementById("toggle");
  const input = document.getElementById("switch");

  // Auto Night mode at night time
  // const d = new Date();
  // const hours = d.getHours();
  // const nightTime = hours >= 19 || hours <= 7; // between 7pm and 7am
  // if (nightTime) {
  // input.checked = true;
  // body.classList.add("night");
  // }

  toggle.addEventListener("click", function () {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove("night");
    } else {
      body.classList.add("night");
    }
  });

  // GO TO TOP BUTTON
  const introHeight = document.querySelector(".intro").offsetHeight;
  const goTopButton = document.getElementById("go-top-btn");
  // const $goTopButton = $("#go-top-btn");

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > (introHeight * 0.8)) {
        // goTopButton.style.display = 'block'; // $goTopButton.fadeIn();
        goTopButton.style.transform = 'translateY(0px)';
      } else {
        // goTopButton.style.display = 'none'; // $goTopButton.fadeOut();
        goTopButton.style.transform = 'translateY(64px)';
      }
    },
    false
  );

  goTopButton.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // BROKEN IMAGES
   document.querySelectorAll('img').forEach(function(img){
    img.onerror = function(){this.style.display='none';};
   })

  // HAND WAVE ANIMATION
  const hand = document.querySelector(".emoji.wave-hand");

  function waveOnLoad() {
    hand.classList.add("wave");
    setTimeout(function () {
      hand.classList.remove("wave");
    }, 2000);
  }

  setTimeout(function () {
    waveOnLoad();
  }, 1000);

  hand.addEventListener("mouseover", function () {
    hand.classList.add("wave");
  });

  hand.addEventListener("mouseout", function () {
    hand.classList.remove("wave");
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: "cubic-bezier(.694,0,.335,1)",
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal(".background");
  sr.reveal(".skills");
  sr.reveal(".experience", { viewFactor: 0.2 });
  sr.reveal(".featured-projects", { viewFactor: 0.1 });
  sr.reveal(".other-projects", { viewFactor: 0.05 });
}

