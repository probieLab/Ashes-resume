const item = document.querySelectorAll('.descriptionItem');
const itemNum = document.querySelectorAll('.descriptionItem').length;
const manualNum = 1;
const controlBox = document.querySelector('.controlBox');
const group = document.querySelector('.descriptionGroup');
const mask = document.querySelector('.startMask');
var height = window.innerHeight;
var width = window.innerWidth;
window.onresize = function () {
    height = window.innerHeight;
    width = window.innerWidth;
    mask.style.height = height + 'px'
    mask.style.width = width + 'px'
}
if (navigator.serviceWorker != null) {
    navigator.serviceWorker.register('js/sw.js')
    .then(function (registartion) {
        console.log('The borrow support PWA')
    })
}
mask.style.height = height + 'px'
mask.style.width = width + 'px'
const descriptionAction = index => {
    return new Promise((rs, rj) => {
        // let item = document.querySelectorAll('.descriptionItem');
        item[index].classList.add('descriptionActionAnimation');
        setTimeout((item) => {
            rs(item);
        }, 1500, item);
    }).then(item => {
        item[index].classList.add('descriptionAction');
        item[index].classList.remove('descriptionActionAnimation');
        return item;
    }).then((item) => {
        let pro = new Promise((res, rej) => {
            setTimeout((item) => {
                if (index < 3)
                    item[index].classList.add('descriptionSwitchAnimation');
                res(item);
            }, 3000, item);
        })
        return pro;
    }).then((pro) => {
        new Promise((res, rej) => {
            setTimeout((pro) => {
                if (index < 3)
                    pro[index].classList.remove('descriptionAction');
                res(0);
            }, 1500, pro);
        })
        // console.log(index);
        return 'success'
    })
}
const autoPlayAnimate = item => {
    let result = Promise.resolve();
    item.forEach((elem, i) => {
        result = result.then(() => {
            return descriptionAction(i)
        })
    });
}
document.querySelector('#autoShow').addEventListener('click', function () {
    mask.style.animation = 'descriptionSwitch 1500ms';
    setTimeout(() => {
        mask.style.display = 'none';
        // mask.style.animation = '';
        autoPlayAnimate(item)
    }, 1500);
});
document.querySelector('#manualShow').addEventListener('click', function () {
    window.open('https://github.com/sadofriod?tab=repositories');
    // mask.style.animation = 'descriptionSwitch 1500ms';
    // setTimeout(() => {
    //     mask.style.display = 'none';
    //     controlBox.style.display = 'flex'
    //     descriptionAction(0);
    // }, 1500);
    // let leftBtn = document.createElement('button');
    // let rightBtn = document.createElement('button');
    // leftBtn.classList.add('controlBtn');
    // rightBtn.classList.add('controlBtn');
    // leftBtn.innerHTML = 'next';
    // rightBtn.innerHTML = 'last'
    // leftBtn.addEventListener('click', () => {
    //     if (manualNum < itemNum ) {
    //         descriptionAction(manualNum);
    //         manualNum++;
    //     }
    // });
    // rightBtn.addEventListener('click',()=>{
    //     if (manualNum < itemNum) {
    //         descriptionAction(manualNum);
    //         manualNum--;
    //     }
    // })
    // controlBox.appendChild(rightBtn)
    // controlBox.appendChild(leftBtn)
})
