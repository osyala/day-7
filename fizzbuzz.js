/**
 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
	return a + b;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){
    	var maxfactor = 1;
    	var i = 1;
    	while (i <= a){
    		if (a%i === 0 && b%i===0){
    			maxfactor=i

    		}
    		i++
    	}
    return maxfactor
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
    var amultiples=[];
    var bmultiples=[];
    var i = 1;
    if (a===0){
        return b
    }
    if (b===0){
        return a
    }
    

    // amultiples.push(a*i) 
    while(i<=b) {
        amultiples.push(a*i);

        i++
    }
    i = 1;
    // bmultiples.push(b*i)
    while(i<=a) {
        bmultiples.push(b*i);

        i++
    }
    console.log(amultiples, bmultiples)

    for (var i = 0; i < amultiples.length; i++) {
        for (var j = 0; j < bmultiples.length; j++) {
            if (amultiples[i]===bmultiples[j]) {
                return amultiples[i]
            };
            
        };

    };

}

var getLCM = LCM(0, 23)

console.log(getLCM)

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 1)

/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

function fizzbuzz(N){

    var fb=""
    for (var i = 1; i <= N; i++) {
        
        if (i%3===0) {
            fb+="fizz";
        }
        else if (i%5===0) {
            fb+="buzz"
        }
        else if (i%3===0 && i%5===0){
            fb+="fizzbuzz"
        }

        else{
            fb+=".";
        };   
    }
    return fb 
}

// console.log(fizzbuzz(5))

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")