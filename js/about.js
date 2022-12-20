function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the#main at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the#main (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

    
}

loco()


// gsap.from("#anim",{
//   onStart: function(){
//     $('#anim').textillate({ in: { effect: 'rollIn' } });
//   }
// })






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


gsap.from("#page1 .containt", {
  opacity: 0,
  y: -200,
  duratin: 3,
  scrollTrigger: {
    trigger: "#page1 .containt",
    scroller: "#main",
    transition: "easein",
    start: "top 70%",
  },
});

gsap.from("#page2 .page2-up-left ", {
  opacity: 0,
  x: -200,
  duratin: 3,
  scrollTrigger: {
    trigger: "#page2 .page2-up-left",
    scroller: "#main",
    transition: "easein",
    start: "top 70%",
  },
});


gsap.from("#page2 .page2-up-right ", {
  opacity: 0,
  x: 200,
  duratin: 3,
  scrollTrigger: {
    trigger: "#page2 .page2-up-right",
    scroller: "#main",
    transition: "easein",
    start: "top 70%",
  },
});


gsap.from("#page3 .page3-main .containt", {
  opacity: 0,
  y: -200,
  duratin: 3,
  scrollTrigger: {
    trigger: "#page3 .page3-main .containt",
    scroller: "#main",
    transition: "easein",
    start: "top 40%",
    // markers:true,
  },
});


gsap.from("#page3 .box-container .box1 ", {
  x: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 .box-container .box1 ",
    scroller: "#main",
    start: "top 65%",
    markers:true,
    // pin:true,
  },
});

gsap.from("#page3 .box-container .box2 ", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 .box-container .box2 ",
    scroller: "#main",
    start: "top 65%",
    // markers:true,
    // pin:true,
  },
});


gsap.from("#page3 .box-container .box3 ", {
  x: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 .box-container .box3 ",
    scroller: "#main",
    start: "top 65%",
    // markers:true,
    // pin:true,
  },
});






