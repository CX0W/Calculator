// Mathematical operations
const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const sub = (a, b) => a - b;

// Variables for storing numbers and operators
let firstNum;
let operator;
let secondNum;

// Event listener for window load
window.addEventListener('load', init);

// Perform mathematical operation based on operator
function operate(firstNum, operator, secondNum) {
    let result;
    switch (operator) {
        case '+':
            result = add(firstNum, secondNum);
            break;
        case '-':
            result = sub(firstNum, secondNum);
            break;
        case '*':
            result = mul(firstNum, secondNum);
            break;
        case '/':
            result = div(firstNum, secondNum);
            break;
    }
    return result;
}

// Initialize the calculator
function init() {
    const buttons = document.querySelectorAll('.num');
    buttons.forEach(button => button.addEventListener('click', () => popbigdisplay(button.textContent)));

    const opbuttons = document.querySelectorAll('.op');
    opbuttons.forEach(op => op.addEventListener('click', () => popsmalldisplay(op.textContent)));

    document.querySelector('.result').addEventListener('click', getresult);
    document.querySelector('.clear').addEventListener('click', cleardisplay);

    const plusminusbutton = document.querySelector('.plusminus');
    plusminusbutton.addEventListener('click', () => {
        const bigDisplay = document.querySelector('.bigd');
        const bigDisplayText = bigDisplay.textContent;

        if (bigDisplayText[0] === '-') {
            bigDisplay.textContent = bigDisplayText.slice(1);
        } else if (!isNaN(bigDisplayText[0])) {
            bigDisplay.textContent = '-' + bigDisplayText;
        }
    });
}

function checkoperatorchange(op) {
    const smalldisplay = document.querySelector('.smalld');
    const smallText = smalldisplay.textContent;

    if (smallText.length > 0 && /[+\-*/]/.test(smallText.charAt(smallText.length - 1))) {
        smalldisplay.textContent = smallText.slice(0, -1) + op;
    }
}

// Clear the display
function cleardisplay() {
    document.querySelector('.bigd').textContent = '';
    document.querySelector('.smalld').textContent = '';
}

// Get the result of the mathematical operation
function getresult() {
    const bigdisplay = document.querySelector('.bigd');
    const smalldisplay = document.querySelector('.smalld');
    const bigText = bigdisplay.textContent;
    const smallText = smalldisplay.textContent;

    for (let i = 1; i < smallText.length; i++) {
        if (/[+\-*/]/.test(smallText[i])) {
            operator = smallText[i];
            firstNum = smallText.slice(0, i);
            secondNum = bigText;
            break;
        }
    }

    const result = operate(Number(firstNum), operator, Number(secondNum));
    bigdisplay.textContent = `${result}`;
    smalldisplay.textContent = '';
}

// Update the big display with the pressed number
function popbigdisplay(x) {
    const bigdisplay = document.querySelector('.bigd');
    const bigText = bigdisplay.textContent;

    bigdisplay.textContent = bigText === '' ? x : `${bigText}${x}`;
}

// Update the small display with the pressed operator
function popsmalldisplay(x) {
    const bigdisplay = document.querySelector('.bigd');
    const smalldisplay = document.querySelector('.smalld');
    const bigText = bigdisplay.textContent;
    const smallText = smalldisplay.textContent;

    if (smallText === '') {
        smalldisplay.textContent = `${bigText}${x}`;
        bigdisplay.textContent = '';
    } else {
        checkoperatorchange(x);
    }
}

//Keyboard Support
document.addEventListener('keydown', (ev) => {
        const key = ev.key;
        if (/^[0-9]$/.test(key)) {
            popbigdisplay(key);
        } else if (/^[+*/-]$/.test(key)) {
            popsmalldisplay(key);
        } else if (key === 'Enter') {
            getresult();
        }
});
    