const someNumbersArray = [8,3,5,4,6];

function randomNumber (arr){
    const num = Math.floor(Math.random() * arr.length)
    return arr[num]
}

console.log(randomNumber(someNumbersArray))