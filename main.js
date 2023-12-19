import { currentLevel as cl, init}  from "./redBlue.js";

const clTag = document.getElementById('currentLevel');
const restarBtn = document.querySelector('.restart');
// const joyStick = document.getElementById('joyStick');


restarBtn.addEventListener('click', init);

// joyStick.addEventListener('pointermove', e => {
//     console.log(e.x, e.y)
// });

function app(){
    clTag.innerHTML = 'Level ' + (cl + 1);
    requestAnimationFrame(app);
}

app();