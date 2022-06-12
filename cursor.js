/* const cursorEllipse = document.getElementById('follow-cursor')

document.addEventListener('mousemove', (e)=>
{
    console.log('mouse moved')

    let x = e.clientX, y = e.clientY;
    cursorEllipse.style.left = `${x}px`
    cursorEllipse.style.top = `${y}px`
}) */


const cursorEllipse = document.querySelector('.follow-cursor');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   console.log('loaded')
  cursorEllipse.style.transform = `translate3d(${mouseX}px, ${mouseY - 60}px, 0)`;
  
}

window.addEventListener('mousemove', moveCursor)
