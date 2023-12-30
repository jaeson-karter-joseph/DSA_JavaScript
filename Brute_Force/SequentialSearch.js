function linearSort(arr, key) {
    arr.sort((a, b) => a - b);
    isFound = false;
    for (const [index, element] of arr.entries()) {

        if (element > key) {
            return -1;
        }

        if (element == key) {
            isFound = true
            return index
        }
    }

    if (!isFound) {
        return -1;
    }
}

let arr = [3, 5, 10, 28, 100]
console.log("Value ", linearSort(arr, 5));
