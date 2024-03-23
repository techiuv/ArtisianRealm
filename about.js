function  page1Animation() {
    gsap.from("#page1 p, #head",{
        opacity:0, 
        stagger:0.4,
        scrollTrigger:{
            trigger:"#page1", 
            scroller: "body", 
            start: "top 50%"
        }
    });
}

page1Animation();