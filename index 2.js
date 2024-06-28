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


