function pushFront(arr, num) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = num;
    return arr;
}

console.log(pushFront([5, 7, 2, 3], 8));
console.log(pushFront([99], 7));

function popFront(arr) {
    let arrZero = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    return arrZero;
}

console.log(popFront([0, 5, 10, 15]));
console.log(popFront([4, 5, 7, 9]));

function insertAt(arr, idx, val) {
    for (let i = arr.length; i >= idx; i--) {
        arr[i] = arr[i - 1];
    }
    arr[idx] = val;
    return arr;
}

console.log(insertAt([100, 200, 5], 2, 311));
console.log(insertAt([9, 33, 7], 1, 42));
