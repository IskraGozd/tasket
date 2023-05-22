const INPUT = document.querySelector('input');
const ADD = document.querySelector('.add');
const TASK = document.querySelector('.area p');
const LIST = document.querySelector('.list');
const DELETE = document.querySelector('.delete');
const EDIT = document.querySelector('.custom');
const RED_T = document.querySelector('.red');
const WHITE_T = document.querySelector('.white');
const BLUE_T = document.querySelector('.blue');
const RED_B = document.querySelector('.red_b');
const WHITE_B = document.querySelector('.white_b');
const BLUE_B = document.querySelector('.blue_b');
const CUSTOM = document.querySelector('.edit');
const REMOVE = document.querySelector('.remove p');
console.log(CUSTOM);
let point = 0;
let array = [];
let touch_edi;

ADD.addEventListener('click', () => {
    let newTask = document.createElement('div');
    newTask.classList.add('area');
    newTask.innerHTML = `
    <div class="icon_1">
        <p>${INPUT.value}</p>
    </div>
    <div class="icon_2">
        <div class="custom">
            <img src="custom (1).png" alt="c" class="edi" id="${point}">
        </div>
        <div class="delete">
            <img src="delete (1).png" alt="d" class="del">
        </div>
    </div>
        
        `
    LIST.appendChild(newTask);
    INPUT.value = '';
    array[point] = newTask;
    point++;
});

LIST.addEventListener('click', (e) => {
    if(e.target.classList.contains('del')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
    else if(e.target.classList.contains('edi')) {
        CUSTOM.classList.add("act");
    }

    touch_edi = e.target.id;
    parseInt(touch_edi);
})

REMOVE.addEventListener('click', () => {
    CUSTOM.classList.remove("act");
});

RED_T.addEventListener('click', () => {
    array[touch_edi].firstElementChild.style.color = "red";
});
WHITE_T.addEventListener('click', () => {
    array[touch_edi].firstElementChild.style.color = "white";
});
BLUE_T.addEventListener('click', () => {
    array[touch_edi].firstElementChild.style.color = "rgb(106, 229, 233)";
});

RED_B.addEventListener('click', () => {
    array[touch_edi].style.background = "red";
});
WHITE_B.addEventListener('click', () => {
    array[touch_edi].style.background = "black";
});
BLUE_B.addEventListener('click', () => {
    array[touch_edi].style.background = "rgb(106, 229, 233)";
});