//1. Do the below programs in anonymous function & IIFE

//Anonymous function
//****************** 

//a. Print odd numbers in array - Anonymous function

/*

let odd=function(a){
    for(var i=0;i<a.length;i++){
        if(a[i]%2 !=0)
        {
            console.log(a[i]);
        }
    }
}
odd([1,2,3,4,5]);

*/

//b. Convert all the strings to title caps in a string array -  Anonymous function
/*

let titleCase=function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("welcome all"));

*/

//c. Sum of all numbers in an array - Anonymous function

/*
let sum=function(arr){
    let s=0;
    for(var i=0;i<arr.length;i++){
        s=s+arr[i];
    }
    return s;
}
console.log(sum([5,5,3]));

*/

//d. Return all the prime numbers in an array - Anonymous function

/*

const newArray = [2,4,5,7,10];
const isPrime =function(num){
  for (let i = 2; i < num; i++) {
    if (num % i === 0) 
        return false;
  }
  return num !== 1;
};

const myPrimeArray = newArray.filter(element => isPrime(element));
console.log("Prime numbers: "+myPrimeArray);

*/

//e.Return all the palindromes in an array - Anonymous function

/*
let findPalindrome=function(a){
    let p=[];
    for(let i=0;i<a.length;i++){
        let s=a[i];
        s = s.split('').reverse().join('');
        if(s == a[i]){
            p.push(a[i]);
        }
    }
    return p;
}
console.log("Palindromes: "+findPalindrome(["mom","son","dad"]));

*/

//f.Return median of two sorted arrays of the same size. - Anonymous function

/*

var arr1 = [ 7,10 ];
var arr2 = [ 2,4,6 ];

const arr3 = arr1.concat(arr2);
var sorted_arr=arr3.sort(function(a, b) {
    return a - b;
  });
var l =sorted_arr.length;

let median=function(arr, n)
{
    // If length of array is even
     if (n % 2 == 0) 
     {
       var z = n / 2;
       var e = arr[z];
       var q = arr[z - 1];
       var ans = (e + q) / 2;
       return ans;
     }
    
     // If length if array is odd
    else
     {
       var z = Math.floor(n / 2);
       return arr[z];
     }
}

console.log("Median = " + median(sorted_arr, l));

*/

//g. Remove duplicates from an array - Anonymous function

/*

let arr = [1,2,1,3,4,5,6,7,5];
 
let removeDuplicates=function(arr) {
    return [...new Set(arr)];
}
 
console.log(removeDuplicates(arr));

*/

//h.Rotate an array by k times - Anonymous function

/*

const rotateArray = function(nums, k){
    const n = nums.length;
    k = k % n;

    const rotatedArray = [];

    for(let i = n - k; i < n; i++) {
        rotatedArray.push(nums[i]);
    }

    for(let i = 0; i < n - k; i++) {
        rotatedArray.push(nums[i]);
    }

    return rotatedArray;
}

console.log(rotateArray([1,2,3,4,5],3));

*/

//*******************************************************************************************************

//IIFE
//**** 

//a. Print odd numbers in array - IIFE

/*


(function(a){
    for(var i=0;i<a.length;i++){
        if(a[i]%2 !=0)
        {
            console.log(a[i]);
        }
    }
})([6,7,8,9,10]);

*/


//b. Convert all the strings to title caps in a string array - IIFE
/*

(function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})("welcome all");

*/


//c. Sum of all numbers in an array - IIFE

/*
(function(arr){
    let s=0;
    for(var i=0;i<arr.length;i++){
        s=s+arr[i];
    }
    console.log(s);
})([10,10,3]);

*/

//d. Return all the prime numbers in an array - IIFE

/*

(function(arr){
    arr=arr.filter((num)=>{
        for (let i = 2; i < num; i++) {
            if (num % i === 0) 
                return false;
          }
          return true;
    })
    console.log("Prime numbers: "+arr);
})([32,17,3,90]);

*/

//e.Return all the palindromes in an array - IIFE

/*

(function(a){
    let p=[];
    for(let i=0;i<a.length;i++){
        let s=a[i];
        s = s.split('').reverse().join('');
        if(s == a[i]){
            p.push(a[i]);
        }
    }
   console.log(p);
})(["aba","son","dad","111"]);

*/

//f.Return median of two sorted arrays of the same size.- IIFE

/*

(function(arr1,arr2)
{
    const arr3 = arr1.concat(arr2);
    var sorted_arr=arr3.sort(
        function(a, b) {
        return a - b;
    });
    var n =sorted_arr.length;
    // If length of array is even
     if (n % 2 == 0) 
     {
       var z = n / 2;
       var e = sorted_arr[z];
       var q = sorted_arr[z - 1];
       var ans = (e + q) / 2;
       console.log (ans);
     }
    
     // If length if array is odd
    else
     {
       var z = Math.floor(n / 2);
       console.log ("Median: "+sorted_arr[z]);
     }
}
)([ 7,10 ],[ 2,4,6 ]);

*/

//g. Remove duplicates from an array - IIFE

/*

(function(arr) {
    console.log([...new Set(arr)]);
})(["Hello","All","Hello","Welcome"]);

*/

//h.Rotate an array by k times - IIFE

/*

(function(nums, k){
    const n = nums.length;
    k = k % n;

    const rotatedArray = [];

    for(let i = n - k; i < n; i++) {
        rotatedArray.push(nums[i]);
    }

    for(let i = 0; i < n - k; i++) {
        rotatedArray.push(nums[i]);
    }

    console.log(rotatedArray);
})([1,2,3,4,5],2);

*/