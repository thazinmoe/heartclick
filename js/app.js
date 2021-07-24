const loveme = document.querySelector('.loveme');
const times = document.querySelector('#times');
var select = document.querySelector('.select');
var click = document.querySelector('.click');

let timesclicked = 0;

//Double click as dblclick
let clicktimes = 0;

loveme.addEventListener('click',(e)=>{
    // console.log('hay');

    if(clicktimes==0){
        clicktimes = new Date().getTime();
        // console.log(clicktimes);
    }else{
        if((new Date().getTime() - clicktimes) < 1000 ){
            createheart(e);

            clicktimes=0;
        }
        else{
            clicktimes = new Date().getTime();
        }
    }
    // console.log(clicktimes);

});

const createheart = (e)=>{
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    const cx = e.clientX;
    const cy = e.clientY;

    const topoffset = e.target.offsetTop;
    const leftoffset = e.target.offsetLeft;

    const xinside = cx - leftoffset;
    const yinside = cy - topoffset;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveme.appendChild(heart);

    times.textContent = ++timesclicked;

    setTimeout(()=>heart.remove(),1000);
};

// for commant box 
click.onclick = ()=>{
	select.classList.toggle('display');
}	
	




	
	