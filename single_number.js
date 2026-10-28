/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length == 0) return 0;
    nums = nums.sort((a,b) => a-b);
    let ans = nums[0];
    for(let i=1;i<nums.length-1;i++){
        if (nums[i] == ans) {
            ans = nums[i+1];
            i++
        };
    };
    return ans;
};

// console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([-336,513,-560,-481,-174,101,-997,40,-527,-784,-283,-336,513,-560,-481,-174,101,-997,40,-527,-784,-283,354]));