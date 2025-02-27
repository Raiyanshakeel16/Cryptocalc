function calculateNewSum(initialSum) {
    const onePercent = initialSum * 0.01;
    const eightyEightPercentOfOnePercent = onePercent * 0.88;
    const newSum = initialSum + eightyEightPercentOfOnePercent;
    return newSum;
}

async function calculate() {
    const initialSum = parseFloat(document.getElementById('initialSum').value);
    const iterations = parseInt(document.getElementById('iterations').value);
    let currentSum = initialSum;
    const results = [];

    for (let i = 0; i < iterations; i++) {
        currentSum = calculateNewSum(currentSum);
        results.push(currentSum);
    }

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';

    results.forEach((sum, index) => {
        resultDiv.innerHTML += `<p>After iteration ${index + 1}, the new sum is: ${sum.toFixed(2)}</p>`;
    });
}
