// Push Front //


function pushFront(arr, newNum){

    temp = arr[arr.length-1]

    for(let i=arr.length-1; i>0; i--){
        arr[i]= arr[i-1] 
    }
    arr[0]=(newNum)
    arr.push(temp)
    return arr
}

console.log(pushFront([2,5,3,1], 12))




// Pop Front //

function popFront(arr) {

    temp=arr[0]
    for(let i = 1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr.pop()
    console.log(arr)
    return temp

}

console.log(popFront([6,8,9,2]))


// Insert At //

function insertAt(arr,idx, newNum){

    temp = arr[arr.length-1]

    for(let i=idx +1; i>idx; i--){
        arr[i]= arr[i-1] 
    }
    arr[idx]=(newNum)
    arr.push(temp)
    return arr
}

console.log(insertAt([4,5,3,1], 2, 9))



