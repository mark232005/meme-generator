'use strict'
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat'] },
]

var gMeme = {
    selectedImgId: 6,
    selectedLineId: 0,
    lines: [
        {
            txt: ' Add text',
            size: 40,
            color: 'red'
        }
    ]
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }



function getImgMeme(id) {
    const idxImg = gImgs.findIndex(img => img.id === id)
    return gImgs[idxImg]
}
function getGImgs() {
    return gImgs
}
function getMeme() {
    return gMeme
}
function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.font = ` ${gMeme.lines[0].size}px Arial` 
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}



function _createMeme(selectedImgId,txtMeme) {
    const img = getImgMeme(selectedImgId)
    const elImg = new Image()
    elImg.src = `${img.url}`
    elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(txtMeme, 200, 75)

    }

}


function slectImg(id){
    gMeme.selectedImgId=id
}

function inputText(){
    const elTextInput=document.getElementById('text')
    const text=elTextInput.value
    gMeme.lines[0].txt=text
}


function showSection(sectionToShow) {
    document.querySelector('.section-gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'none'
    document.querySelector(sectionToShow).style.display = 'block'
  }
  
