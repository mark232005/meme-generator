'use strict'
function renderGallery(){
    const memes=getGImgs()
    const elGallery=document.querySelector('.section-gallery')
    const strHtml= memes
    .map(meme => `<img src="${meme.url}" alt="img/errorImg" onclick="onImgSelect(${meme.id})" />`)
    .join('')
    elGallery.innerHTML=strHtml
}

function onImgSelect(id){
    slectImg(id)
    renderMeme()
    showSection('.editor')
 }

  

