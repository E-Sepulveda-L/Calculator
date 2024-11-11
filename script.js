const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');


function refreshScreen (value){
    screen.innerText = value
}

let result = '';

buttons.forEach(button => button.addEventListener('click', () => {
    
    if(button.innerText === '='){
        result = eval(result.replace('×', '*').replace('÷', '/'))
    }else if(button.innerText === '←'){
        result = result.slice(0, -1)
    }else if(button.innerText === 'AC'){
        result = ''
    }else{
        result += button.innerText
    }
    refreshScreen(result)
}))