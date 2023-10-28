function filterArray(numbers, value) {
    let numbersArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            numbersArray.push(numbers[i]);
        }
    }
    return numbersArray;
}