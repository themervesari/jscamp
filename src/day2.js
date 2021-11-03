/*
A function where you can send as many number parameters as you want with JavaScript.
A program that writes whether there are primes as output for each number that you send to this function.
*/

function findPrime(...numbers) {
    let counter = 0
    
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] == 0) || (numbers[i] == 1) || (numbers[i] < 0)) {
                console.log(numbers[i] + " is not prime number")
        }
        else{
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j == 0) {
                    counter = 1
                    break
                }
            }
            if (counter == 0 ) {
                console.log(numbers[i] + " is prime number")
            }
            else{
                console.log(numbers[i] + " is not prime number")
            }
            counter = 0
        } 
    }
}
findPrime(1, 0, 3, 5, 10, 18, -7, 71)

// A program that finds whether two numbers entered as parameters are friend numbers
 function friendNumber(number1, number2) {
     let total1 = 0
     let total2 = 0
     for (let i = 0; i < number1; i++) {
         if (number1 % i == 0) {
             total1 += i
         }       
     }

     for (let j = 0; j < number1; j++) {
         if (number2 % j == 0) {
             total2 += j
         }       
     }

     if ((number1 == total2) && (number2 == total1)) {
         console.log(number1 + " and " + number2 + " are friend number")
     }
 }
 friendNumber(220, 284)

//  Program that lists all the perfect numbers up to 1000
 console.log("Perfect Numbers")
 function perfectNumbers(number) {
     for (let i = 1; i < number; i++) {
         let total = 0
         for (let j = 1; j < i; j++) {
             if (i % j == 0) {
                 total += j
             }
         }
        
         if (total == i) {
             console.log(i)
         }
     }
 }
 perfectNumbers(1000)

// Program that lists all prime numbers up to 1000
 console.log("Prime Numbers")
 function primeNumbers(number) {
     let counter = 0
     for (let i = 2; i < number; i++) {
        
         for (let j = 2; j < i; j++) {
             if (i % j == 0) {
                 counter = 1 
                 break
             }           
         } 
         if (counter == 0) {
             console.log(i)
         }

         counter = 0
     }
 }
primeNumbers(1000)