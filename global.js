setTimeout(()=>{
    console.log('in the timout');
    clearInterval(interval)
}, 1000*3);

const interval = setInterval(()=>{
    console.log('in the interval')
}, 1000);

console.log(__dirname);
console.log(__filename)