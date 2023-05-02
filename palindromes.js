// Given a string, retrun true if the string is a palindrome or false if it is not.

//Solution one

function palindrome(str){
    let reversed =  str.split('').reverse().join('')
    if(reversed === str){
        return true
    } else {
        return false
    }
}

//another way to write that: 

function palindromeB(str){
    let reversed = str.split('').reverse().join('')
    return str === reversed
}

//solution two
//Using the every() function

function palindromeTwo(str) {
    return str.split('').every((char, i )=> {
        return char === str[str.length - i -1]
    })

}
