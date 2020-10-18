const tl = gsap.timeline(); 
tl.to("#bg", { duration: 1, x: -100 })
    .to("#bg", { duration: 1, backgroundColor: "#6bb6ef" }, "+=0.2") 
    .to("#bg", { duration: 1, x: 0, rotation: -360, backgroundColor: "#ffacac" }, "+=0.1")

tl.to("#bg2", { duration: 0.2, x: 100 })
    .to("#bg2", { duration: 0.5, backgroundColor: "#6bb6ef",x:0 }, "+=0.2") 
    

gsap.from(".card__main", { duration: 1,runBackwards: true, ease: "power2.out", y: -200, delay:0.5,rotate:360 });
gsap.to("#primary", { duration: 1,runBackwards: true, ease: "power2.out", y: -500 , x:-200 });


