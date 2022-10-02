let numeros = [2, 6, 8, 5, 7, 21, 25, 14]


const order = nums => {
    let newArray = nums.sort(function (a, b) { return a - b })
    
    let count =[]
    for (array of newArray) {
        if (array % 2 == 0) {
            count.push(array)
        }
    }
    
    console.log(count.length)
    return newArray
}

console.log(order(numeros))