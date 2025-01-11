const functions = ['linear', 'ease-in', 'ease-out', 'ease-in-out', 'ease'];
let main = document.querySelector('main');
let body = document.querySelector('body');

let spans;
let x;
let y;
// console.log(body.clientWidth);
body.addEventListener('mousemove', function (e) {
    x = e.clientX;
    y = e.clientY;
    spans = document.querySelectorAll('main>span');
    // console.log(spans[0]);
    spans.forEach((sp) => {
        console.log(sp.offsetTop);
        if (-60 < (parseInt(y) - parseInt(sp.offsetTop)) && (parseInt(y) - parseInt(sp.offsetTop)) < 60 && (parseInt(x) - parseInt(sp.offsetLeft)) < 60 && -60 < (parseInt(x) - parseInt(sp.offsetLeft))) {
            // sp.style.backgroundColor = 'red'
            if (parseInt(x) - parseInt(sp.offsetLeft) < 0) {
                sp.style.left = `${parseInt(sp.style.left) + 30}px`

            } else {
                sp.style.left = `${parseInt(sp.style.left) - 30}px`

            }
        } else {
            // sp.style.backgroundColor = 'white';

        }
    })

})
setInterval(function () {
    let tagSpan = document.createElement('span');
    // let fun = functions[parseInt((Math.random() * 5))];
    let width = parseInt((Math.random() * 40) + 4);

    tagSpan.style.animationTimingFunction = 'ease-out';
    tagSpan.style.animation = `snowan ${parseInt((Math.random() * 20) + 1)}s  0.4s forwards`
    tagSpan.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`
    tagSpan.style.width = width + 'px';
    tagSpan.style.height = width + 'px';
    tagSpan.style.left = parseInt((Math.random() * 1500)) + 'px';
    tagSpan.style.top = parseInt((Math.random() * 7)) + 'px';
    main.appendChild(tagSpan);
    // let spans = document.querySelectorAll('span');
    // spans.forEach((sp) => {
    //     console.log(parseInt(sp.style.top));
    //     if (0 < (parseInt(y) - parseInt(sp.style.top)) && (parseInt(y) - parseInt(sp.style.top)) < 10 && 0 < (parseInt(x) - parseInt(sp.style.left)) && (parseInt(y) - parseInt(sp.style.left)) < 10) {
    //         sp.style.backgroundColor = 'red';
    //     } else {
    //         sp.style.backgroundColor = 'white';

    //     }
    // })

}, 70)

