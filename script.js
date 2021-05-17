/*
// A function that does something

const check = function(number) {

    const anwser = number;
    if (anwser > 100) {
        return true;
    }
    return false;

};

const result = check(101);
console.log(result);



*/

/*

// A function that does something

const bouncer = function(age, currentNumber, maximumNumber) {


    if (age < 18) {
        return "This is a club for adults";
    }

    if (currentNumber > maximumNumber) {
        return "It's too busy now, come back later";
    }
   
        return "Come on in";
};


const result = bouncer(17, 250, 250);
console.log(result);




*/

// A function that produce something


let averageArray = function(no1, no2, no3, no4, no5){

        
        let average = Math.round ((no1 + no2 + no3 + no4 + no5) / averageArray.length);
        return average;
};

const result = averageArray (4, 4, 5, 6, 10);
console.log(result)




