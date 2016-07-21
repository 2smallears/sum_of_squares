/**
 * Created by root on 16-7-21.
 */
function printSumOfSquares(inputs) {
    const oddElements = findOddElements(inputs);
    const squares = getSquares(oddElements);
    const sumOfSquares = getSumOfSquares(squares);
    
    console.log(sumOfSquares);
}

function findOddElements(inputs) {
    const oddElements = [];
    for (const input of inputs){
        if (input % 2 !== 0){
            oddElements.push(input);
        }
    }
    return oddElements;
}

function getSquares(oddElements) {
    return oddElements.map(odd => {
        return odd*odd;
    });
}

function getSumOfSquares(squares) {
    let sumOfSquares = 0;
    for (const square of squares){
        sumOfSquares += square;
    }
    return sumOfSquares;
}