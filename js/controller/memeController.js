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
    const txtMeme = meme.lines[0].txt

    _createMeme(selectedImgId, txtMeme)
}

function onInputText() {
    inputText()
    renderMeme()
 }
