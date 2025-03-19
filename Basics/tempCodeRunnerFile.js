let count = 0;
const add = (a) => {
    if(count<10) {
        a+=count;
    console.log(a);
    count++;
    }
    else{
        clearInterval(addition);
    }
    
    
}

let addition = setInterval(add,1500,1);