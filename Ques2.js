//2. Do the below programs in arrow functions

//Arrow function
//**************

//a. Print odd numbers in array - Arrow function

/*

let odd=a=>{
    for(var i=0;i<a.length;i++){
        if(a[i]%2 !=0)
        {
            console.log(a[i]);
        }
    }
}
odd([5,6,7,8,9]);

*/

//b. Convert all the strings to title caps in a string array -  Arrow function

/*

let titleCase=str => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("welcome all"));

*/

//c. Sum of all numbers in an array - Arrow function

/*

let sum= arr =>{
    let s=0;
    for(var i=0;i<arr.length;i++){
        s=s+arr[i];
    }
    return s;
}
console.log(sum([5,5,5]));

*/

//d. Return all the prime numbers in an array - Arrow function

/*

const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);

*/

//e.Return all the palindromes in an array - Arrow function

/*

let findPalindrome= a => {
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

