document.addEventListener("DOMContentLoaded",function(){
    // déclarations valeurs et variables
    let time = 4000;
    let carouselWidth = 1490;
    let carouselHeight = 700;
    let carouselParent = document.querySelector("#carousel");
    const imgArray = [];
    let i = 0;
    while (i<4) {
      imgArray[i]  = "https://picsum.photos/500/300?random="+(i+1);
      i++;  
    }
    //construction de mes éléménts
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.style.width = carouselWidth+"px";
    carousel.style.height = carouselHeight+"px";
    carousel.style.position = "relative";
    carousel.style.overflow = "hidden";
    carouselParent.prepend(carousel);

    //imageA
    const imageA = document.createElement("img");
    imageA.src = imgArray[0];
    imageA.alt = "blablabla";
    imageA.style.width = "100%";
    imageA.style.position = "absolute";
    imageA.style.zIndex = 1;
    // ajouts d'effet?
    carousel.prepend(imageA);

    //imageB
    const imageB = document.createElement("img");
    imageB.src = imgArray[1];
    imageB.alt = "blablabla";
    imageB.style.width = "100%";
    imageB.style.position = "absolute";
    imageB.style.zIndex = 0;
    // ajouts d'effet?
    carousel.prepend(imageB);













})