const headerTitle = document.getElementById("headerTitle");
const backgroundPic = document.getElementById("backgroundPic");
const title1 = document.getElementById("title1");


const titleY = title1.offsetTop;



headerTitle.addEventListener('click', (e)=>{
    window.location.href="./#"
})

window.onmousemove = (e)=>{
    //parallax background
    const parallaxRatio = 0.02;
    var height = window.innerHeight;
    var width = window.innerWidth;
    const offset = 30;
    
    var x = -parallaxRatio * (e.clientX - width/2);
    var y = -parallaxRatio * (e.clientY - height/2);
    backgroundPic.style.left = (x - offset) + "px";
    backgroundPic.style.top = (y - offset) + "px";


    //moving the text
    
    const parallaxRatio2 = 0.05;
    var x2 = -parallaxRatio2 * (e.clientX - width/2);
    var y2 = -parallaxRatio2 * (e.clientY - height/2);
    //offset position so still near center
    title1.style.left = (x2 + width/2) + "px";
    title1.style.top = (y2 + titleY) + "px";
    console.log(x2);
 }
