//Optimized Bubble Sort
function bubbleSort(arr) {
    let isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSwapped = true
            }
        }

        if(!isSwapped){
            return arr;
        }
    }

    return arr;
}

let unsortedArray = [1,2,3,4,5,6];
console.log("Unsorted Array", unsortedArray);
console.log("Sorted Array", bubbleSort(unsortedArray));