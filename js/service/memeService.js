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
            color: 'black'
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
function drawText(text, x, y,id) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'balck'
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineId].color
    gCtx.font = ` ${gMeme.lines[gMeme.selectedLineId].size}px Arial` 
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    if(gMeme.selectedLineId===id){
        const textWidth = gCtx.measureText(text).width;
        const textHeight = gMeme.lines[gMeme.selectedLineId].size   
        gCtx.strokeRect(x - textWidth / 2 - 10, y - textHeight / 2 - 10, textWidth + 20, textHeight + 20)
    
    }
    
}




function slectImg(id){
    gMeme.selectedImgId=id
}

function setLineTxt(){
    const elTextInput=document.getElementById('text')
    const text=elTextInput.value
    gMeme.lines[gMeme.selectedLineId].txt=text
}
function setLineColor(){
    const elColorInput=document.getElementById('color')
    const color=elColorInput.value
    gMeme.lines[gMeme.selectedLineId].color=color
    
}

function showSection(sectionToShow) {
    document.querySelector('.section-gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'none'
    document.querySelector(sectionToShow).style.display = 'block'
  }
  function download(){
    const elLink = document.createElement('a')
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-meme'
    elLink.click()
  }

 function changeSize(value){
    if(value==='+'){
        gMeme.lines[gMeme.selectedLineId].size++
    }
    if(value==='-'){
        gMeme.lines[gMeme.selectedLineId].size--
    }
 }

 function createLins(){
    gMeme.lines.push(
        { txt: ' Add text',
            size: 40,
            color: 'black'}
    )
    gMeme.selectedLineId++

 }

  function addLine(){
    createLins()
  }
   function switchLine(){
    var currLine=gMeme.selectedLineId
    currLine++
    if(currLine>=gMeme.lines.length){
        currLine=0
    }
    gMeme.selectedLineId=currLine
    // const textWidth = gCtx.measureText(text).width;
    // const textHeight = gMeme.lines[gMeme.selectedLineId].size   
    // gCtx.strokeRect(x - textWidth / 2 - 10, y - textHeight / 2 - 10, textWidth + 20, textHeight + 20)

   }