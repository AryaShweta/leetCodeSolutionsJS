/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {   
    let lowIndex = searchIndex(nums,target, 0, nums.length-1, true);
    let highIndex =-1;
    if(lowIndex>-1){
         highIndex = searchIndex(nums,target, 0, nums.length-1, false);
    }
    return [lowIndex, highIndex]
    
};

var searchIndex = (nums,target, start, end, isLow)=>{
    let index=-1;
    while(start <= end){
        let mid = parseInt((start+end)/2);
        if(nums[mid] == target){
            index = mid;
            if(isLow)          
                end = mid-1;
            else
                start= mid+1;
        }
        else{
             if(nums[mid] > target)
                end = mid-1;
              if(nums[mid] < target)
                start = mid+1;
        }
        
    }
    return index;
}

nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums, target));