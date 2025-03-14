var crsr=document.querySelector("#cursor")
var blur =document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"

    blur.style.left=dets.x+"px"
    blu.style.top=dets.y+"px"

})


gsap.to("#nav", { // Upper top-down black effect
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top-10%", 
        end:"top -11%",
        scrub: 2
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -30%", 
        end: "top -100%",
        scrub: 2
    }
});
