let bground = document.querySelector('.bground');

let i = 0;
setInterval(() => {
    if(i==0) bground.children[4].style.opacity = 0;
    else bground.children[i-1].style.opacity = 0;
    let img_div = bground.children[i];
    img_div.style.opacity = 1;
    i++;
    if(i==5) i=0;
}, 2000);

