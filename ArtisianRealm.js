const artisianRealm = document.getElementById('brand-name');
const menu = document.getElementById('menu');
const menuDisplay = document.getElementById('for-home');
const close = document.getElementById('close');

function refreshPage() {
    window.location.reload(); //Refresh the page
}

artisianRealm.addEventListener('click',refreshPage);

// Update the year function 

function updateCopyRightNotice() {
    let copyRight = document.getElementById('copy-right-notice');
    let year = new Date().getFullYear();
    copyRight.innerHTML = `© ${year} ArtisianRealm. All rights are reserved.`;
}

updateCopyRightNotice();

setInterval(updateCopyRightNotice,1000);


// toggle the hamburger menu 

menu.addEventListener('click',()=>{
    if (menuDisplay.style.display === 'none') {
        menuDisplay.style.display = 'flex';
    }else {
        menuDisplay.style.display = 'none'
    }
});

menuDisplay.addEventListener('click',()=>{
   menuDisplay.style.display = 'none'
})

close.addEventListener('click',()=>{
    if (menuDisplay.style.display === 'flex') {
        menuDisplay.style.display = 'none'
    } 
});


// gsap for paragraph animation

function page2Animation() {
    gsap.from("#page2 q, #page2 p", {       
        y:10, 
        opacity:0, 
        stagger: 0.4,
        scrollTrigger: {
            trigger: "#page2 q",
            scroller: "body",
            start: "top 50%",                
        }
    });
}

page2Animation()// Add a animation in page2 txt


function  page3Animation() {
    gsap.from("#value-of-art",{
        x:120,     
        opacity:0,   
        stagger:0.5, 
        duration:1, 
        scrollTrigger: {
            trigger:"#page3 q" , 
            scroll:"body", 
            start:"top 40%", 
        //    scrub:2, 
           // markers:true, 
        }
    });
}

page3Animation();

gsap.from("#page3 h3",{
    x:-50,     
    opacity:0,   
    stagger:0.5, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page3 q" , 
        scroll:"body", 
        start:"top 40%", 
      
    }   
});

gsap.from("#art",{
    x:50,     
    opacity:0,   
    stagger:0.5, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page3 q" , 
        scroll:"body", 
        start:"top 40%", 
      
    }   
    
});

gsap.from("#box-one",{
    x:-50,     
    opacity:0,   
    stagger:0.5, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page3" , 
        scroll:"body", 
        start:"top 55%", 
        
       
    }   
});

gsap.from("#box-two",{
    x:50,     
    opacity:0,   
    stagger:0.5, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page3" , 
        scroll:"body", 
        start:"top 55%", 
       
       
    }   
});

gsap.from("#box-three",{
    y:50,     
    opacity:0,   
    stagger:0.5, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page3" , 
        scroll:"body", 
        start:"top 55%", 
    }   
});

gsap.from("#art-define",{     
    opacity:0,   
    stagger:0.5, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page3 q" , 
        scroll:"body", 
        start:"top 20%", 
    }   
});


gsap.from("#art-define-tittle",{
    y:50,     
    opacity:0,   
    stagger:0.4, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page3 q" , 
        scroll:"body", 
        start:"top 20%", 
       
    }   
});

gsap.from("#about-us",{
    y:10,     
    opacity:0,   
    stagger:0.4, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page4" , 
        scroll:"body", 
        start:"top 5%", 
       
    }   
});


gsap.from("#cont",{
    y:10,     
    opacity:0,   
    stagger:0.4, 
    duration:1, 
    scrollTrigger: {
        trigger:"#page4" , 
        scroll:"body", 
        start:"top 5%", 

    }   
});

