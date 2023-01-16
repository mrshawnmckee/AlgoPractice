// 1 Print all the integers from 1 to 255:

for (var i =1; i < 255, i++) {
    console.log(i)
};




// 2 Print integers from 0 to 255, and with each integer print the sum so far

sum = 0
for(var i = 0; i <255; i++) {
    sum +=i
    console.log(`The number is ${i} and the sum is ${sum}`)

} 




//3  Given an array, find and print it's largest element

const myArr = [12, 9, 56, 2, 36];

max = 0
for(var i = 0; i < myArr.length; i++) {

    myArr[i] > max ? max=myArr[i] : null;
}
console.log(max); 




//4 Create an array with all the odd integers between 1 and 255
const myArr2 = [];

function oddArray(arr) {
for(var i = 0; i < 255; i++) {
    
    i % 2 !== 0 ? myArr2.push(i) : null;
    }
    return arr
}
console.log(oddArray(myArr2))




// 5  Given an array and a value Y, count and print the number of array values greater than Y
let arr5 = [12,6,76,34,8]

let total = 0;
function greaterThanY(arr, y) {

    for(var i = 0; i < arr.length; i++){
    arr[i] > y ? (console.log(arr[i]), total ++) : null;

    }
    return total
}

greaterThanY(arr5, 10)
console.log(total)



// 6 Given an array, print the max, min, and average values for that arry
let max = 0
let min = Number.MAX_SAFE_INTEGER       //or min = myArr4[0]
let sum = 0
let avg = 0


const myArr4 = [10,23,56,95,1];

for (let i = 0; i < myArr4.length; i++) {
    myArr4[i] > max ? max =myArr4[i] : null
    myArr4[i] < min ? min= myArr4[i] : null
    sum +=myArr4[i]

}
avg = sum/myArr4.length

console.log(`The max number in the array is ${max}`)
console.log(`The min number in the array is ${min}`)
console.log(`The average of the numbers in the array is ${avg}`)




// 7 Replace any negative array values with 'Dojo'

let arr7 = [1, -6, 45, 6, -12]

function negativeToDojo(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] < 0 ? arr[i] = "Dojo": null
    }
    return arr
}
negativeToDojo(arr7)




// 8 Print all odd integers from 1 to 255
function printOddIntegers() {
    for(var i = 0; i < 250; i++){
        i % 2 !== 0 ? console.log(i):null
    }
}

printOddIntegers()


//9 Iterate through a given array, printing each value
let arr9 = [1, -6, 43, -9, 2]

function printIterationValues(arr) {
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

printIterationValues(arr9)


// 10 Analyze and array's values and print the average
function findAvg(arr) {
    let avg = 0;
    let sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum +- arr[i];
    }
    avg = sum/arr.length;
    return avg;
}


// 11 Square each value in a given array, returning that same array with changed values
function squareArray(arr){
    for(var i = 1; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];

    }
    return arr
}
squareArray(arr)


// 12 Return the given array, after setting any negative values to zero

let arr12 = [1, -6, 43, -9, 2]

function changeNegsToZero(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] < 0 ? arr[i] = 0: null
    }
    return arr
}

console.log(changeNegsToZero(arr12))



//13 Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end
function arrShift(arr){
    for(var i = 1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = 0;
    return arr
}