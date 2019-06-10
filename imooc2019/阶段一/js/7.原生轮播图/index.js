window.onload=function(){
let slides=document.getElementsByClassName('banner-slide');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let dots=document.getElementById('dots');
let span=dots.getElementsByTagName('span')
var i=0;
function move(){  
    xun()
    i++;
    if(i==3){
        i=0
    }
}
function xun(){
    for(var j=0;j<slides.length;j++){
        slides[j].style.display="none";
        span[j].className=""
    }
    slides[i].style.display='block';
    span[i].className="active"
}
next.addEventListener('click',function(e){
    e.preventDefault()
    clearInterval(cls)
    xun()
    
    i++;
    if(i==3){
        i=0
    }
})
prev.addEventListener('click',function(e){
    e.preventDefault()
    clearInterval(cls)
    xun()
    slides[i].style.display='block'
    i--;
    if(i==-1){
        i=2
    }
})

var cls=setInterval(move,1000)

for(let i=0;i<span.length;i++){
    span[i].onclick=function(){
        clearInterval(cls)
        for(var k=0;k<span.length;k++){
            slides[k].style.display="none";
            span[k].className=""
        }
        span[i].className="active";
        slides[i].style.display='block'

        
    }
}

let content=document.getElementById('menu-content')
let item=content.getElementsByClassName('menu-item')
let sub=document.getElementById('sub-menu')
let inner=sub.getElementsByClassName('inner-box')
content.addEventListener('mouseenter',function(){
    sub.className="sub-menu"
})
content.addEventListener('mouseleave',function(){
    sub.className="sub-menu hide"
})
for(let i=0;i<item.length;i++){
    
    item[i].onmouseover=function(){
        for(var j=0;j<item.length;j++){
            inner[j].style.display="none"
        }
        inner[i].style.display="block"
    }
}
let timer=null
function start(){
    timer=setInterval(function(){
        i++;
        if(i==3){
            i=0
        }
        xun()
    },1000)
}
start()
let main=document.getElementById('main')
main.addEventListener('mouseover',function(){
    clearInterval(timer)
})
main.addEventListener('mouseout',function(){
    start()
})
}