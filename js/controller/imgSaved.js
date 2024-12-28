

'use strict'

function showMemeSaved() {
    const elSavedPage = document.querySelector('.canvas-container-saved')
    const savedMemes = getSavedMemes()
    let strHtml = ''
    
    savedMemes.forEach(meme => {
        strHtml += `
        <canvas class="canvas-container-saved" width="450" height="450" data-id="${meme.selectedImgId}" onclick="onImgSelect(${meme.selectedImgId})"></canvas>
        `
    })
    
    elSavedPage.innerHTML = strHtml
    
    savedMemes.forEach(meme => {
        renderMemeSaved(meme)
    })
}

function renderMemeSaved(meme) {
    const gElCanvasSaved = document.querySelector(`canvas[data-id="${meme.selectedImgId}"]`)
    
    
    const gCtxSaved = gElCanvasSaved.getContext('2d')  
    
    const selectedImgId = meme.selectedImgId
    const img = getImgMeme(selectedImgId) 
    const elImg = new Image()
    elImg.src = img.url
    
    elImg.onload = () => {
        gCtxSaved.drawImage(elImg, 0, 0, gElCanvasSaved.width, gElCanvasSaved.height)
        
        meme.lines.forEach((line, idx) => {
            drawText2(line.txt, line.pos.x, line.pos.y, idx, meme, gCtxSaved)
        })
    }
}

function drawText2(text, x, y, idx, meme, ctx) {
    ctx.lineWidth = 2
    ctx.strokeStyle = meme.lines[meme.selectedLineId].colorFrame
    ctx.fillStyle =  meme.lines[meme.selectedLineId].color
    ctx.font = ` ${meme.lines[meme.selectedLineId].size}px ${meme.lines[meme.selectedLineId].font}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    ctx.fillText(text, x, y)
    ctx.strokeText(text, x, y)

    if (meme.selectedLineId === idx) {
        const textWidth = ctx.measureText(text).width
        const textHeight = 30 
        ctx.strokeRect(x - textWidth / 2 - 10, y - textHeight / 2 - 10, textWidth + 20, textHeight + 20)
    }
}

function getSavedMemes() {
    const savedMemes = loadFromStorage(IMG_KEY)
    return savedMemes || []  
}

