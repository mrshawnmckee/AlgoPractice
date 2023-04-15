// 1) Remove Blanks //

function removeBlanks(s) {

    let newString = ''
    for(let i = 0; i<s.length; i++){
        if(s[i] != ' '){
            newString += s[i]
        }
    }
    return newString
}

console.log(removeBlanks("hello hwo are oyu"))






// 2) Get Digits //

function getDigits(s){
    let newString = ''

    for(let i = 0; i < s.length; i++){
        if(!isNaN(s[i]) )
        newString += s[i]
    }
    let newNumber = Number(newString)
    //console.log(typeof(newNumber))

    return newNumber
}
console.log(getDigits("h3ll012lmnop"))



// 3) Acronyms //

function Acronyms(s) {

    const newArr = s.split(' ') 
    let acrString = ''
    //console.log(newArr)
    for(let i = 0; i < newArr.length; i++){
        //console.log(newArr[i][0])
        acrString += newArr[i][0]
        //console.log(acrString)
        newAcr = acrString.toUpperCase()
    }
    return newAcr
}

console.log(Acronyms("isnt this fun"))






// 4) Count non-spaces //

function countNonSpaces(s) {
    count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] != ' ')
        count ++
    }
    return count
}

console.log(countNonSpaces("This is a sentence"))



// 5) Remove Shorter Strings //

function removeShorterStrings(s, num) {
    let newArr = s.split(' ')
    let arrWithLongerWords = []

    for(let i = 0; i < newArr.length; i++)
        if(newArr[i].length >= num ){
            arrWithLongerWords.push(newArr[i])
        }

    return(arrWithLongerWords)
}

console.log(removeShorterStrings("This is a sentence with small words", 4))
