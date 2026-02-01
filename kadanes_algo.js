const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const method1 = (arr) => {
    let currSum = arr[0];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    };
    return maxSum;
};

console.log("max sub array sum", method1(nums));
