let slide =document.getElementById("com-flex");
let prev=document.querySelector("#prev");
let next =document.querySelector("#next");
let currItem =0;

let slide2 =document.getElementById("feature");
let prev1=document.querySelector("#prev1");
let next1 =document.querySelector("#next1");
let currItem1=0;

let slide3 =document.getElementById("grid");
let prev2=document.querySelector("#prev11");
let next2 =document.querySelector("#next11");
let currItem2 =0;

let slide4 =document.getElementById("flex");
let prev3=document.querySelector("#prev12");
let next3 =document.querySelector("#next12");
let currItem3 =0;

let slide5 =document.getElementById("eve-2");
let prev4=document.querySelector("#prev13");
let next4 =document.querySelector("#next13");
let currItem4 =0;

prev.addEventListener("click", function() {
    currItem = (currItem > 0) ? currItem - 1 : slide.scrollLeft / slide.offsetWidth;
    slide.scrollTo({
        left: currItem * slide.offsetWidth,
        behavior: 'smooth'
    });
});

next.addEventListener("click", function() {
    currItem = (currItem < slide.children.length - 1) ? currItem + 1 : 0;
    slide.scrollTo({
        left: currItem * slide.offsetWidth,
        behavior: 'smooth'
    });
});


prev1.addEventListener("click", function() {
    currItem1 = (currItem1 > 0) ? currItem1 - 1 : slide2.scrollLeft / slide2.offsetWidth;
    slide2.scrollTo({
        left: currItem1 * slide2.offsetWidth,
        behavior: 'smooth'
    });
});

next1.addEventListener("click", function() {
    currItem1 = (currItem1 < slide2.children.length - 1) ? currItem1 + 1 : 0;
    slide2.scrollTo({
        left: currItem1 * slide2.offsetWidth,
        behavior: 'smooth'
    });
});


prev2.addEventListener("click", function() {
    currItem2 = (currItem2 > 0) ? currItem2 - 1 : slide3.scrollLeft / slide3.offsetWidth;
    slide3.scrollTo({
        left: currItem2 * slide3.offsetWidth,
        behavior: 'smooth'
    });
});

next2.addEventListener("click", function() {
    currItem2 = (currItem2 < slide3.children.length - 1) ? currItem2 + 1 : 0;
    slide3.scrollTo({
        left: currItem2 * slide3.offsetWidth,
        behavior: 'smooth'
    });
});

prev3.addEventListener("click", function() {
    currItem3 = (currItem3 > 0) ? currItem3 - 1 : slide4.scrollLeft / slide4.offsetWidth;
    slide4.scrollTo({
        left: currItem3 * slide4.offsetWidth,
        behavior: 'smooth'
    });
});

next3.addEventListener("click", function() {
    currItem3 = (currItem3 < slide4.children.length - 1) ? currItem3 + 1 : 0;
    slide4.scrollTo({
        left: currItem3 * slide4.offsetWidth,
        behavior: 'smooth'
    });
});


prev4.addEventListener("click", function() {
    currItem4 = (currItem4 > 0) ? currItem4 - 1 : slide5.scrollLeft / slide5.offsetWidth;
    slide5.scrollTo({
        left: currItem4 * slide5.offsetWidth,
        behavior: 'smooth'
    });
});

next4.addEventListener("click", function() {
    currItem4 = (currItem4 < slide5.children.length - 1) ? currItem4 + 1 : 0;
    slide5.scrollTo({
        left: currItem4 * slide5.offsetWidth,
        behavior: 'smooth'
    });
});


