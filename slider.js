const slider = document.querySelector('.slider'),
      sliderInner = slider.querySelector('.slider__inner'),
      sliderItems = slider.querySelectorAll('.slider__item');

const {log} = console;





const arrOfImgsSrc = (Array.from(sliderItems).map(i => i.firstElementChild.src)).map(i => '.'+i.substring(i.search('/img'), i.length))

let drawItemTransform = 0;
let counterS = 0;
let sliderItemLength = sliderItems[0].clientWidth
console.log(sliderItemLength)
let counterPx = sliderItemLength + 25;
function s () {
    
    if(counterS === 6) {
        counterS = 0
        setTimeout(() => {
            document.querySelector('.slider__inner').innerHTML = `
            <div class="slider__item">
            <img src="./img/1.jpg" alt="" class="slider__img">
            </div>
            <div class="slider__item">
                <img src="./img/2.jpg" alt="" class="slider__img">
            </div>
            <div class="slider__item">
                <img src="./img/3.jpg" alt="" class="slider__img">
            </div>
            <div class="slider__item">
                <img src="./img/4.jpg" alt="" class="slider__img">
            </div>
            <div class="slider__item">
                <img src="./img/5.jpg" alt="" class="slider__img">
            </div>
            <div class="slider__item">
                <img src="./img/6.jpg" alt="" class="slider__img">
            </div>
            
            <div class="slider__item">
            <img src="./img/1.jpg" alt="" class="slider__img">
            </div>
        `

             drawItemTransform = 205;
             counterPx = 180 + 25;
        }, 500);
      

    }
    
    drawItem()  
    let time = setTimeout(() => {
        document.querySelectorAll('.slider__item').forEach(i => i.style.transform = `translateX(-${counterPx}px)`)
        counterPx += sliderItemLength + 25
    
        s()
    }, 2000);

    

}
s()



function drawItem () {
    const newDiv = window.document.createElement('div');
    newDiv.classList.add('slider__item');
    newDiv.innerHTML = `
    <img src="${arrOfImgsSrc[counterS]}" alt="" class="slider__img">
    `
    newDiv.style.transform = `translateX(-${drawItemTransform}px)`
    sliderInner.append(newDiv)
    drawItemTransform = drawItemTransform + 205
    counterS++
    console.log(counterS)
}

