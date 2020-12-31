function add(){
    console.log('+++++')
};
let wait = 500,

function throttle(func,wait){
    let timer = null,
        previous = 0,
        result;
    return function proxy(...params){
        let now = +new Date,
            remaining = wait - (now - previous);
        if( remaining <=0 ){
            if(timer){
                clearTimeout(timer);
                timer = null;
            }
            previous = now
            result = func(params)
            return result;
        }
        if(!timer){
            timer = setTimeout(()=>{
                previous = + new Date;
                clearTimeout(timer);
                timer = null;
                result = func(params);
            },remaining)
        }
        return result;
    }
}

window.onscroll = throttle(add,wait);