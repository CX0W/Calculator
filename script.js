let add= (a,b)=>{
    return (a+b);
}
let mul= (a,b)=>{
    return (a*b);
}
let div= (a,b)=>{
    return (a/b);
}
let sub= (a,b)=>{
    return (a-b);
}
let firstNum;
let operator;
let secondNum;
function operate (firstNum, operator, secondNum){
    switch (operator){
        case '+':
            console.log(add(firstNum,secondNum));
            break;
        case '-':
            console.log(sub(firstNum,secondNum));
            break;
        case '*':
            console.log(mul(firstNum,secondNum));
            break;
        case '/':
            console.log(div(firstNum,secondNum));
            break;
    }

}
function init(){
    const numDiv=document.querySelector('.numDiv');
    for (let i=0;i<10;i++){
        const div= document.createElement('div');
        div.textContent=i;
        numDiv.append(div);

    }

}