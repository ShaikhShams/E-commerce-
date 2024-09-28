let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}


gsap.from("#shams",{
  opacity:0,
  duration:0.3,
  
  ease:"bounce",
  scrollTrigger:{
  scroller:"body",
  start:"top -17"
  }  
});

gsap.from(".offer-card", {
  y:-1000,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
  delay: 1,
  ease:"bounce",
  scrollTrigger:{
  scroller:"body",

  start:"start -70%"
  
}
});

gsap.from(".product-item", {
  y:-1000,
  duration: 0.6,
  opacity:0,
  stagger: 0.2,
  ease:"bounce",
  scale:0.5,
  scrollTrigger:{
  scroller:"body",
 
  start:"top -20%"
  
}
});


gsap.from("#nav", { 
  duration: 1.5, 
  y: -100, 
  opacity: 0, 
  ease: "bounce" 
  
  
});


gsap.from("#head", {
  duration: 1.5,
  x: -10,
  opacity: 0, 
  delay: 0.5, ease:
  "bounce"
  
  
});




 gsap.from("#para", { 
   duration: 1.5,
   x: 10, 
   opacity: 0, 
   delay: 1, 
   ease: "bounce"
   
   
 });
    
    
    
 gsap.from(".center-part1 h1",{
   opacity:-2,
   duration:1,
   delay:0.2,
 }) 
  gsap.from(".center-part1 p",{
   opacity:-2,
   duration:1,
   delay:0.3,

 })
 
 
 gsap.from(".center-part2 img",{
   opacity:-2,
   duration:1,
   delay:0.2,
  
   ease:"power1 out"
 })    


    
 gsap.from("#promoVideo",{
  y:-400,
  
 })    

gspp.from(".video-container",{
  scale:1.5,
  opacity:0,
  duration:1,
  delay:0.3,
  y:-2000,
  
  
}) 

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    tl.from(".overlay-text h1",{
      duration: 1,
      y: -50, 
      opacity: 0,
      ease: "bounce"
      
      
    })
      .from(".overlay-text p", {
        duration: 1,
        y: 50, 
        opacity: 0,
        ease: "power1.inOut"}
        
        , "-=0.5")
       
       
   .from(".shop-button", {
     duration: 1,
     scale: 0.5,
     opacity: 0, 
     ease: "elastic"});
});







function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true,
  })
  
}





