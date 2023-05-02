// Given a string, retrun a new string with the reversed order of characters


//Solution one

function reverse(str) {
    const arr = str.split('');  //Turns the string into an array
    arr.reverse();
    return arr.join('')         //Turns it back into a string and returns it
    
}

//you can also do all three steps in one line:
function reverseB(str) {
    return str.split('').reverse().join('')
}

// or the same thing written differently:
function reverseC(str){
    return str
        .split('')
        .reverse()
        .join('');
}

// Solution Two

function reverseTwo(str){
    let reversedStr = "";
    for(let idx of str) {
        reversedStr = idx + reversedStr
    }
    return reversedStr
}

// Solution two with traditional for loop

function reverseTwoB(str) {
    let newStr = ""
    for(let i = 0; i < str.length; i ++){
        newStr = str[i] + newStr
    }
    return newStr
}

//Solution three
//We will turn the string into an array by using split, then use reduce helper
//Reduce takes all values in an array and reduces them to one singular value
//reduce takes two parameters, an arrow function, and the second being a starting initial value, in this case, an empty string. The sarting initial value get passed into the arrow function, ahich will run once for every element in the array
//reversed = newStr, idx = variable

function reverseThree(str) {
    return str.split('').reduce((reversed, idx) => {
        return idx + reversed

    },'')

}

// More condensed
function reverseThreeB(str){
    return str.split('').reduce((rev, char) => char + rev, '');
}

