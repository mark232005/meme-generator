'use strict'


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  
  function showMsg(act){
    const msg=document.querySelector('.modal-mag')
    msg.innerHTML=`You successfully ${act}`
msg.classList.remove('hidden')
    setTimeout(() => {
        msg.classList.add('hidden')

    }, 2000);

 }