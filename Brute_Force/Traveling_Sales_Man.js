function calculateDistance(order, distances) {
  let totalDistance = 0;
  for (let i = 0; i < order.length - 1; i++) {
    totalDistance += distances[order[i]][order[i + 1]];
  }
  totalDistance += distances[order[order.length - 1]][order[0]]; // Return to the starting city
  return totalDistance;
}

function bruteForceTSP(distances) {
  const numCities = distances.length;
  const initialOrder = Array.from({ length: numCities }, (_, index) => index);

  let bestOrder = initialOrder.slice();
  let minDistance = calculateDistance(bestOrder, distances);

  function permute(arr, callback) {
    const swap = (i, j) => {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };

    const generatePermutations = (n) => {
      if (n === 1) {
        callback(arr.slice());
      } else {
        for (let i = 0; i < n; i++) {
          generatePermutations(n - 1);
          swap(n % 2 === 0 ? i : 0, n - 1);
        }
      }
    };

    generatePermutations(arr.length);
  }

  permute(initialOrder, (currentOrder) => {
    const currentDistance = calculateDistance(currentOrder, distances);
    if (currentDistance < minDistance) {
      minDistance = currentDistance;
      bestOrder = currentOrder.slice();
    }
  });

  return { order: bestOrder, distance: minDistance };
}

// Example usage
const distances = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];

const result = bruteForceTSP(distances);
console.log("Best Order:", result.order);
console.log("Minimum Distance:", result.distance);
