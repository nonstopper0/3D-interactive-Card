let card = document.querySelector('.card');
let cardContent = document.querySelector('.card-content');
let cardWidth = card.offsetWidth
let cardHeight = card.offsetHeight
let mouseIn = false;
let lastMove = 0;
let runInterval = 1000 / 30

function mouseOver() {
  mouseIn = true;
}

function mouseLeave() {
  mouseIn = false;
  cardContent.style.transform = ""
}

function mouseMove(e) {
  // only run mousemove function every X milliseconds relative to last movement.
  if (mouseIn && e.timeStamp - lastMove > runInterval) {
    console.log('ran');
    
    // Control range of movement. Less is more.
    let speedX = 45
    let speedY = 50
    
    let newD = (e.offsetX / speedX) - 5;
    let newH = (Math.abs(e.offsetY - 150) / speedY);
    
    // right
    if (e.offsetX > (cardWidth / 2)) {
      cardContent.style.transform = `translate3d(0px, 0px, 20px) rotateX(${e.offsetY > (cardHeight / 2) ? newH : -newH}deg) rotateY(${-newD}deg)`
    } 
    
    // left
    else if (e.offsetX < (cardWidth / 2)) {
      cardContent.style.transform = `translate3d(0px, 0px, 20px) rotateX(${e.offsetY > (cardHeight / 2)  ? newH : -newH}deg) rotateY(${-newD}deg)`
    }
    
    lastMove = e.timeStamp;
  }
}

card.addEventListener('mouseover', mouseOver);
card.addEventListener('mouseleave', mouseLeave);
card.addEventListener('mousemove', mouseMove);