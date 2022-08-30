/*
https://leetcode.com/problems/kth-missing-positive-number/
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
    let start = 0;
    let end = arr.length-1;
 
    if(arr[end]== end+1)
        return arr[end]+k;
    if(arr[0]>k)
        return k;
    
    while(end-start >1){
        let mid = parseInt((start+end)/2);
        let diff = arr[mid] - mid - 1;
        if(diff<k){
            start = mid;
        }
        else{
            end = mid ;
        }
    }
    if(arr[end] - end-1 <k)
        return k+ end +1;
    else
        return k+start+1;
    
};
arr = [2,3,4,7,11], k = 5
console.log(findKthPositive(arr, k));
