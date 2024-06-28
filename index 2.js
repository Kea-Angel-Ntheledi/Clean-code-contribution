//Challenge 2: The functions:
    function calculateAndPrintStatistics(data) {
    let sum = 0;
    for (let datum of data) {
        sum += datum;
    }
    let average = sum / data.length;

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    for (let datum of data) {
        if (datum > max) {
            max = datum;
        }
        if (datum < min) {
            min = datum;
        }
    }

    console.log(`Sum: ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
}


//Solution:
function calculateAndPrintStatistics(data) {
    const sum = calculateSum(data);
    const average = calculateAverage(data, sum);
    const max = findMax(data);
    const min = findMin(data);

    printStatistics(sum, average, max, min);
}

function calculateSum(data) {
    return data.reduce((acc, val) => acc + val, 0);
}

function calculateAverage(data, sum) {
    return sum / data.length;
}

function findMax(data) {
    return Math.max(...data);
}

function findMin(data) {
    return Math.min(...data);
}

function printStatistics(sum, average, max, min) {
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
}
