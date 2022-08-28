/*
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    let rows = grid.length;
    let columns = grid[0].length; 
    let count = 0;
    let r = rows-1;
    let c = 0;

    while( r >= 0 &&  c < columns){        
        if(grid[r][c] <0){
            count += columns - c;
            r --;
        }
        else{
             c++;
        } 
    }
    return count;  
};
grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives(grid))