// FIZZ BUZZ
for(let i=1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else if (i % 3 == 0){
        console.log("Fizz")
    } else if(i % 5 == 0){
        console.log("Buzz")
    } else{
        console.log(i)
    }
}

// Prime Time 
/* Any number = n
Check whether it is prime 
    -> If prime, print number
    -> If not, increment number by 1
*/
let n = 13; 

while(true){

    n++;
    let isPrime = true;

    for(let i = 2; i < n; i++){
        if(n % i == 0){
            isPrime = false;
            break;
        }
    }if (isPrime){
        console.log("The next prime number is " + n);
        break;
    }
}

// Feeling Loopy