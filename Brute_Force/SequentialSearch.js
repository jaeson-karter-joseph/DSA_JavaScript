//Optimized Linear Search
function SequentialSearch(arr, key) {

    let isFound = false;
    for (const [index, element] of arr.entries()) {
        if (element > key) {
            return -1;
        }

        if (element == key) {
            isFound = true;
            return index
        }
    }

    if (!isFound) {
        return -1;
    }
}

let arr = [1, 5, 323, 2, 0, 2];
arr.sort((a, b) => a - b)
console.log(arr)
console.log(SequentialSearch(arr, 22));