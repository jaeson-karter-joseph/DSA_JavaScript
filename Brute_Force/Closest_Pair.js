function closetPair(points) {
    let min = Infinity;
    index1 = index2 = 0;
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            //Skipping SQRT as it is not required for comparison to reduce Computation time
            let dist = Math.pow((points[i][0] - points[j][0]), 2) + Math.pow((points[i][1] - points[j][1]), 2);
            if (dist < min) {
                min = dist;
                index1 = i;
                index2 = j;
            }
        }
    }

    return [points[index1], points[index2]]
}



let points = [[1, 4], [3, 9], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]];
console.log(closetPair(points));