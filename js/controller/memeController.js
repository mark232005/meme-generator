'use strict'
let gElCanvas
let gCtx
let gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']


function onInit(){
  showSection('.section-gallery')
  gElCanvas=document.querySelector('canvas')
  gCtx=gElCanvas.getContext('2d')
addListeners()
}

function renderMeme() {
    const meme = getMeme()
    const selectedImgId = meme.selectedImgId
    const img = getImgMeme(selectedImgId)
    const elImg = new Image()
    elImg.src = `${img.url}`
    
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        
        meme.lines.forEach((line, idx) => {
            drawText(line.txt, line.pos.x, line.pos.y, idx)
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


function addListeners() {
    addMouseListeners()
    addTouchListeners()}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
  }
  
  function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
    
  }


  function getEvPos(ev) {

    let pos = {
      x: ev.offsetX,
      y: ev.offsetY,
    }
  
    if (TOUCH_EVS.includes(ev.type)) {
      // Prevent triggering the mouse ev
      ev.preventDefault()
      // Gets the first touch point
      ev = ev.changedTouches[0]
      // Calc the right pos according to the touch screen
      pos = {
        x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
        y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
      }
    }
    return pos
  }
  
  
  function onDown(ev) {
    // Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    // console.log('pos', pos)
    if (!isLineClicked(pos)) return
  
    setLineDrag(true)
    //Save the pos we start from
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
  
    if (lineClicked) {
        const elTextInput = document.getElementById('text');
        elTextInput.value = gMeme.lines[gMeme.selectedLineId].txt; 
        renderMeme()
    }
}

function onMove(ev) {
    if (!gMeme.lines[gMeme.selectedLineId].isDrag) return

    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y

    const line = gMeme.lines[gMeme.selectedLineId]
    line.pos.x += dx
    line.pos.y += dy

    gStartPos = pos  

    renderMeme() 
}

    function onUp() {
        setLineDrag(false)
        document.body.style.cursor = 'default'
    }

   function onSetFont(){
    setFont()
    renderMeme()
   }
   function onDeleteLine(){
    deleteLine()
    renderMeme()
   }