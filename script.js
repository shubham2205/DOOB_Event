function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the#main at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the#main (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

gsap.from("nav", {
  duratin: 3,
  delay: 0.5,
  opacity: 0,
  y: -200,
  scrollTrigger: {
    trigger: "nav",
    scroller: "#main",
    start: "top 70%",
  },
});

gsap.from("#page2 .containt", {
  opacity: 0,
  y: 200,
  duratin: 3,
  scrollTrigger: {
    trigger: "#page2 .containt",
    scroller: "#main",
    transition: "easein",
    start: "top 70%",
  },
});

gsap.from("  #page2 .boxes", {
  y: 200,
  opacity: 0,
  duratin: 3,
  scrollTrigger: {
    trigger: "#page2 .boxes",
    scroller: "#main",
    // markers: true,
    start: "top 65%",
    // pin:true,
  },
});

gsap.from("#page4 .page4-right-main ", {
  y: 200,
  opacity: 0,
  duratin: 3,
  scrollTrigger: {
    trigger: "#page4 .page4-right-main ",
    y: 200,
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    // pin:true,
  },
});

gsap.from("#page6 .containt ", {
  y: 200,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: "#page6  .containt",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    // pin:true,
  },
});

gsap.from("#page6 .page6-images", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page6 .page6-images",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
  },
});

gsap.from("#page7 .containt ", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page7  .containt",
    scroller: "#main",
    start: "top 60%",
    // pin:true,
  },
});

gsap.from("#page7 .page7-boxes .price-box1 ", {
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page7 .page7-boxes .price-box1",
    scroller: "#main",
    start: "top 60%",
    // pin:true,
  },
});


gsap.from("#page7 .page7-boxes .price-box2 ", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page7 .page7-boxes .price-box2",
    scroller: "#main",
    start: "top 60%",
    // pin:true,
  },
});


gsap.from("#page8 .containt ", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page8  .containt",
    scroller: "#main",
    start: "top 60%",
    // pin:true,
  },
});

gsap.from("#page8 .page8-main ", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page8  .page8-main",
    scroller: "#main",
    start: "top 60%",
    // pin:true,
  },
});



// let valueDisplays = document.querySelectorAll(".num");
// let interval = 3000;

// // console.log(valueDisplays)

// valueDisplays.forEach((valueDisplays) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplays.getAttribute("data-val"));

//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(
//     function() {
//       startValue += 1  ;
//       valueDisplays.textContent = startValue;
//       if (startValue == endValue) {
//         clearInterval(counter);
//       }
//     },duration);
// });
