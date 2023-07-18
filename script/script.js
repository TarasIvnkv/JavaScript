firstNum = parseFloat(prompt(`Enter the first fractional number`));
secondNum = parseFloat(prompt(`Enter the first fractional number`));
firstNum = parseFloat(firstNum.toFixed(2));
secondNum = parseFloat(secondNum.toFixed(2));
console.log(`${firstNum} and ${secondNum}`);
randomNum =  Math.random() * (firstNum - secondNum) + secondNum;
randomNum = parseFloat(randomNum.toFixed(2));
alert(`Random number is: ${randomNum}🥳`);
thirdNum = parseFloat(prompt(`Enter the third fractional number`));
thirdNum = parseFloat(thirdNum.toFixed(2));
formulaSum = `${randomNum} + ${thirdNum}`;
formulaSubtraction = `${randomNum} - ${thirdNum}`;
formulaMultiplication = `${randomNum} * ${thirdNum}`;
formulaDivision = `${randomNum} / ${thirdNum}`;
sum = (randomNum + thirdNum).toFixed(2);
subtraction = (randomNum - thirdNum).toFixed(2);
multiplication = (randomNum * thirdNum).toFixed(2);
division = (randomNum / thirdNum).toFixed(2);
document.write(`
    <table>
        <tr>
            <th>Operation</th>
            <th>Expression</th>
            <th>Value</th>
        </tr>
        <tr>
            <th>Sum</th>
            <td>${formulaSum}</td>
            <td>${sum}</td>
        </tr>
        <tr>
            <th>Subtraction</th>
            <td>${formulaSubtraction}</td>
            <td>${subtraction}</td>
        </tr>
        <tr>
            <th>Multiplication</th>
            <td>${formulaMultiplication}</td>
            <td>${multiplication}</td>
        </tr>
        <tr>
            <th>Division</th>
            <td>${formulaDivision}</td>
            <td>${division}</td>
        </tr>
    </table>
`);