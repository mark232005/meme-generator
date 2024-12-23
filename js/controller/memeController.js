'use strict'
let gElCanvas
let gCtx

function onInit(){
gElCanvas=document.querySelector('canvas')
gCtx=gElCanvas.getContext('2d')
renderGallery()
showSection('.section-gallery')

}

function renderMeme(){
    const meme= getMeme()
    const selectedImgId = meme.selectedImgId
    const img = getImgMeme(selectedImgId)
    const elImg = new Image()
    elImg.src = `${img.url}`
    elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    meme.lines.forEach((line, idx) => {
        drawText(line.txt, gElCanvas.width / 2, 50 + idx * 60, idx)
    })
    }
}

function onSetLineTxt() {
    setLineTxt()
    renderMeme()
}
function onDownload(){
    download()
}
function onSetLineColor(){
    setLineColor()
    renderMeme()
}
function onChangeSize(value){
    changeSize(value)
    renderMeme()
   }
function onAddLine(){
    addLine()
    renderMeme()
}

function onSwitchLine(){
    renderMeme()
  switchLine()
}



