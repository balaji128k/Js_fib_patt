console.log('ps ps ps pss');

// comments are from my understanding!


function feb_seq(initialConditionA, initialConditionB, iterationCount) {
    
    let feb_arr = [];
    
    if (iterationCount <= 0) return feb_arr;
    
    feb_arr.push(initialConditionA);
    if (iterationCount > 1) feb_arr.push(initialConditionB);
    
    for (let i = 2; i < iterationCount; i++) {
        
        let temp = parseFloat((feb_arr[feb_arr.length-2] + feb_arr[feb_arr.length-1]).toFixed(3));
        feb_arr.push(temp);
        
    }
    return feb_arr;
    
}

function printString(a, b, c) {
    let feb_arr = feb_seq(a, b, c);
    let sep = ", ";
    let res = "";
    
    for (let i = 0; i < feb_arr.length; i++) {
      res += feb_arr[i];
      if (i < feb_arr.length - 1) {
        res += sep;
      }
    }
    console.log(res);
    
}

function printArr(a, b, c) {
    console.log(feb_seq(a, b, c));
}



printString(0.7881, 1.13, 6);

printString(0, 1, 12);

printArr(2, 3, 10);

// printArr(0, 1, 3); // [0, 1, 1]

