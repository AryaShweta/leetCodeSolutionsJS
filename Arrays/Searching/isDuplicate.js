/*
https://leetcode.com/problems/contains-duplicate/
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let map = new Map();
    for(let num of nums){
        if(map.has(num))
            return true;
        else
            map.set(num,1);
    }
    return false;
};

var nums = [1,1,1,3,3,4,3,2,4,2];
var Output = containsDuplicate(nums);
console.log(Output);
