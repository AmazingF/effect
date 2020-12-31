let sumbit = document.querySelector('.submit');
function add() {
    console.log('++++++')
};
let wait = 500,
    immediate = true

function debounce(func, wait, immediate) {
    // 扩展
    if (typeof func != 'function') throw TypeError('func must be a function');
    if (typeof wait === 'undefined') {
        //给默认值
        wait = 500,
            immediate = false
    }
    if (typeof wait === 'boolean') {
        immediate = wait;
        wait = 500;
    }
    if (typeof wait !== 'number') throw TypeError('wait must be a number');
    if (typeof immediate !== 'boolean') throw TypeError('immediate must be a boolean');

    let timer = null,
        _this = this
    result = null;
    return function (...params) {
        // 立即执行，后面的不执行
        if (!timer && immediate) result = func.apply(_this, params);

        if (timer) clearTimeout(timer);
        timer = null;
        timer = setTimeout(function () {
            // 清除最后一次的定时器
            clearTimeout(timer);
            timer = null;

            if (!immediate) result = func.apply(_this, params)
        }, wait)
        return result;
    }
}

sumbit.onclick = debounce(add, wait, immediate)