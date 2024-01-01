

function convexHull(points) {
    let convexPoints = [];
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {

            if (i == j) {
                continue;
            }
            let indexI = points[i];
            let indexJ = points[j];

            let pointsAreOnSameSide = true;
            for (let k = 0; k < points.length; k++) {
                if (k == i || k == j) {
                    continue;
                }
                let d = checkOnSameSide(indexI, indexJ, points[k]);
                if (!d) {
                    pointsAreOnSameSide = false;
                    break;
                }
            }

            if (pointsAreOnSameSide) {
                console.log(indexI, indexJ);
                convexPoints.push(indexI);
                convexPoints.push(indexJ);
            }
        }
    }
}

function checkOnSameSide(indexI, indexJ, indexK) {
    let x1 = indexI[0];
    let y1 = indexI[1];

    let x2 = indexJ[0];
    let y2 = indexJ[1];

    let x3 = indexK[0];
    let y3 = indexK[1];

    let a = y1 - y2;
    let b = x2 - x1;
    let c = x1 * y2 - x2 * y1;

    let result = a * x3 + b * y3 + c;

    if (result > 0) {
        return true;
    } else {
        return false;
    }
}





let points = [[0, 3], [1, 1], [2, 2], [4, 4], [0, 0], [1, 2], [3, 1], [3, 3]];
convexHull(points);