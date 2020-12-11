var arr = [0,1,2,3,4];
var index = 0;
setInterval(function(){
    console.log(arr[index++ % arr.length]);
}, 1000)