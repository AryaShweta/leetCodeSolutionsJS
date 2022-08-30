/*
https://leetcode.com/problems/search-insert-position/
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    if(nums[start] >= target)
        return start;
    while(end -start >1){
        let mid = parseInt((end+start)/2);
        if(nums[mid]==target)
            return mid;
        else {
            if(nums[mid] < target)
                start = mid;
            else
                end = mid;
             }
    }
    if(nums[end]<target)
        return end+1;
    else
        return start+1;
    
};
nums = [1,3,5,6], target = 7
console.log(searchInsert(nums, target));