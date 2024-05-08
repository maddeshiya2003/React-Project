function genetateRandomNumber (n) {
    let arr = new Array();
    for(let i=0;i<n;i++) {
        arr[i]=(Math.round(Math.random()*9))
    }

    return arr;
}

function sum(arr) {
    let total=0;
    for(let ele of arr){
        total+=ele;
    }
    return total;
}

export{genetateRandomNumber,sum};