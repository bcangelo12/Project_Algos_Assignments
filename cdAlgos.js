const makeBig = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    // console.log(arr);
    return arr;
};
const ans = makeBig([-1, 3, 5, -5]);
console.log(ans);

const countPositives = function (arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter++;
        }
    }
    arr[arr.length - 1] = counter;
    return arr;
};

const result = countPositives([-1, -4, 1, 1]);
console.log(result);

const reverse = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = 0;
        temp = arr[right];
        arr[right] = arr[i];
        arr[i] = temp;
        left++;
        right--;
    }
    return arr;
};

const res = reverse([1, 2, 3, 4, 5]);
console.log(res);

const rotateArr = function (nums, k) {
    k = k % nums.length;
    reverseRotate(0, nums.length - 1, nums);
    reverseRotate(0, k - 1, nums);
    reverseRotate(k, nums.length - 1, nums);
    console.log(nums);
};
const reverseRotate = (left, right, arr) => {
    while (left < right) {
        let lVal = arr[left];
        arr[left] = arr[right];
        arr[right] = lVal;
        left++;
        right--;
    }
};

rotateArr([1, 2, 3, 4, 5, 6, 7], 3);
