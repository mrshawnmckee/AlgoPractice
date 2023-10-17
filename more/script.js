function findMin(list) {
    let min = list[0]
    for(let i = 1; i < list.length; i ++){
        if(list[i] < min){
            min = list[i]
        }
    }
    return min
}

console.log(findMin([12, 34, -5, -200]))

// ?Print all numbers
// function printAll(){
//     for(let i = 1; i <= 255; i++){
//         console.log(i)
//     }
// }
// printAll(6)

// print sum of all numbers
function printSum(num) {
    let sum = 0
    for(let i = 1; i <= num; i ++){
        sum += i
    }
    return console.log(`The sum is ${sum}`)
}
printSum(6)