let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.
    //.concat()
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1)
console.log(holdCabinet2.concat(holdCabinet1));
console.log(holdCabinet2)
    //.sort()
holdCabinet1.sort()
console.log(holdCabinet1);
holdCabinet2.sort()
console.log(holdCabinet2);
    //.slice
holdCabinet1.slice(2,3)
console.log(holdCabinet1);
holdCabinet2.slice(4,5)
console.log(holdCabinet2);

//Answer : .concat() did not alter the original arrays
//Answer : .sort(), however did alter the original array's
//Answer : .slice() didn't change the original array's 

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
        // NO IT DOES NOT ALTER THE ORIGINAL ARRAY 
//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(0,1) , holdCabinet1.slice(1,2));
console.log(holdCabinet1);
console.log(holdCabinet2.slice(0,1) , holdCabinet2.slice(3,4));
console.log(holdCabinet2);
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse()
console.log(holdCabinet1);
holdCabinet2.sort()
console.log(holdCabinet2);

// Answer : .reverse() flips the array from index 0 and flips it and .sort() 'attempts' to sort the array from greatest to smallest.
