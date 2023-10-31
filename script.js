const head=document.querySelector('.head');
const btn=document.querySelector('.btn');
btn.addEventListener('click',function(){
    moreImg=10;
    randomImg();

});
function randomImg(){
    for(i=0;i<moreImg;i++){
    const createImg=document.createElement("img");
    createImg.src=`https://picsum.photos/300?random= ${Math.floor( Math.random()*200)}`;
    head.appendChild(createImg);
    }
}