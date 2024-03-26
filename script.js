document.querySelector('body').addEventListener('mousemove',function(dats){
    function abc(){
        document.querySelector('#ball').style.top = `${dats.clientY}px`;
        document.querySelector('#ball').style.left = `${dats.clientX}px`;

    }
    window.requestAnimationFrame(abc)
});
document.querySelector('.loader').addEventListener("click",function(){
    document.querySelector(".loader h1").style.marginLeft = "-100%";
    document.querySelector(".loader h1").style.opacity  = "0";
    document.querySelector(".loader p").style.marginLeft = "-100%";
    document.querySelector(".loader p").style.opacity = "0";
    document.querySelector("#ball").style.scale = "0";
})