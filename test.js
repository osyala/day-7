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