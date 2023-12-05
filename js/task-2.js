function makeArray(firstArray, secondArray, maxLength) {
    const finalArray = firstArray.concat(secondArray);
    return finalArray.length > maxLength ? finalArray.slice(0, maxLength) : finalArray;
}