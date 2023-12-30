function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }

    return arr;
}

let unsortedArray = [8,5,1,10,12]
console.log("Original Array: ", unsortedArray)
selectionSort(unsortedArray)
console.log("Sorted Array: ", unsortedArray)
