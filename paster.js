// Now try to reimplement, but also include all potential operations. i.e. 1 + 2 + 3 or 1 * 2 + 3 etc.
// And then filter out duplicates and sort the array in order
// This is the same process used to solve a sudoku through brute force

var array = [1, 2, 3];
//          [0, 0, 0] = 0
//          [0, 0, 1] = 3
//          [0, 1, 0] = 2
//          [0, 1, 1] = 5
//          [0, 0, 0] = 0

var addedArray = [];

function recurseOverArray(array, i, total) {
    if (array.length > i) {

        var totalWithNumberIncluded = total + array[i];
        // Recurse when off
        i++;
        recurseOverArray(array, i, total);

        // Recurse when on
        recurseOverArray(array, i, totalWithNumberIncluded);

    } else {
        if (addedArray.indexOf(total) == -1) {
            addedArray.push(total);
            console.log(total);
        }
    }
}

recurseOverArray(array, 0, 0);

console.log(addedArray);