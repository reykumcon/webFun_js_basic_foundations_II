// 1. Biggie Size

function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }

    return arr;
}

// 2. Print Low, Return High

function printLowReturnHigh(arr) {
    var min = arr[0];
    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > min) {
            max = arr[i];
        }
    }

    console.log(min);
    return max;
}

// 3. Print One, Return Another

function printOneReturnAnother(arr) {
    console.log(arr[arr.length - 2]);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}

// 4. Double Vision

function double(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }

    return newArr;
}

// 5. Count Positives

function countPositives(arr) {
    var positives = []
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives.push(arr[i]);
        }
    }

    arr[arr.length - 1] = positives.length;
    return arr;
}

// 6. Evens and Odds

function evensAndOdds(arr) {
    var odd = 0;
    var even = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even++;
            odd = 0;
        } else {
            odd++;
            even = 0;
        }

        if (even == 3) {
            console.log("Even more so!");
        } else if (odd == 3) {
            console.log("That's odd!");
        }
    }
}

// 7. Increment the Seconds

function addOneToOdds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    
    return arr;
}

// 8. Previous Lengths

function previousLengths(arr) {
    for (var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }

    return arr;
}

// 9. Add Seven

function addSeven(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }

    return newArr;
}

// 10.Reverse Array

function reverseArray(arr) {
    for (var i = 0; i < arr.length/2; i++) {
        var value = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = value;
    }

    return arr;
}

// 11. Outlook: Negative

function negative(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * -1);
    }

    return newArr;
}

// 12. Always Hungry

function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
        } 
    }
}

// 13. Swap Towards The Center

function swapTowardsCenter(arr) { 
    for (var i = 0; i < arr.length/2; i++ ) {
        var value = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = value;
    }
    return arr;
}

// 14. Scale the Array

function scaleArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }

    return arr;
}