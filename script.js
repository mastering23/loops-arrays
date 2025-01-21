let numArrays = [1, 4, 10, 6];

const movArrays = (arry) => {
 
    console.log(arry);  
    numArrays.shift();
    console.log(arry);
    for(let index = 0; index < arry.length;index++){
    console.log(arry[index] + 2 );
    }
}

movArrays(numArrays);
