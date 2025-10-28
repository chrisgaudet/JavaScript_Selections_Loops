console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++) {
     if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log(i, "FIZZ");
        } else if (i % 5 == 0) {
            console.log(i, "BUZZ");
        }
    }
}


// Exercise 3 Section 
console.log("EXERCISE 3-Part:1 :\n==========\n");

let a = 1;

while (a < 100) {
    let answer = "";

    if (a % 3 == 0) {
        answer = "FIZZ";
    }

    if (a % 5 == 0) {
        answer = "BUZZ";
    }

    console.log(`${a} ${answer}`);

    a++;
}

console.log("EXERCISE 3-Part:2 :\n==========\n");

let b = 1;

do {
    let output = "";

    if (b % 3 == 0) {
        output += "FIZZ";
    }

    if (b % 5 ==0) {
        output += "BUZZ";
    }

    console.log(`${b} ${output}`);

    b++;
} while (b <= 100);


// Exercise 4 Section
console.log("EXERCISE 4 :\n==========\n");

let numberToGet = Math.round(Math.random() * 500); 
// creates a random number between 0 and 500

let n = Math.round(Math.random() * (500 - 100) + 100); 
// creates a random number between 100 and 500

for (let x = 1; x <= n; x++) {
    if (x == numberToGet) {
        console.log(`Found ${numberToGet}!`);
        break;
    }

    if (x == n) {
      console.log(`Did not find ${numberToGet} within 1-${x}.`);
    }
}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let z = start; z <= end; z++) {
    let nom = "";

    if (z % fizzDivisor == 0) {
        nom += "FIZZ";
    }

    if (z % buzzDivisor == 0) {
        nom += "BUZZ";
    }
    console.log(`${z} ${nom}`);
}

console.log(fizzDivisor, buzzDivisor);