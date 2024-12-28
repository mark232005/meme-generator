'use strict'

function onImgSelect(id) {
    slectImg(id)
    renderMeme()
    showSection('.editor')
}
function onOpenGallery() {
    showSection('.section-gallery')
}
function toggleMenu() {
    document.querySelector('.nav-var').classList.toggle('menu-open')
    document.querySelector('.main-screen').classList.toggle('active')

}

function onRandomize() {
    var id = getRandomInt(1, 18)
    onImgSelect(id)
    showSection('.editor')

}

function onOpenSaved() {
    showMemeSaved()
    showSection('.saved-page')

}

function onShare(){
    
}








