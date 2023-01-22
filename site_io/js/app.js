let card = document.querySelectorAll('.img__animation')
card.forEach(card => {
    card.addEventListener('mousemove', cardrotate)
    card.addEventListener('mouseout', carddefault)
})

function cardrotate(e) {
    let x = e.offsetX
    let y = e.offsetY
    let cursorCardPositionY = y - this.offsetHeight / 2
    let cursorCardPositionX = x - this.offsetWidth / 2
    this.style.transform = `perspective(2000px) rotateY(${cursorCardPositionX / 16}deg) 
    rotateX(${(cursorCardPositionY / 16) * -1}deg)`
}

function carddefault() {
    this.style.transform = ''
}