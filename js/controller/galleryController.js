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



