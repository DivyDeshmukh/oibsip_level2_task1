const input = document.querySelector ('#input');
const btn_container = document.querySelector ('#grid-container');
const btn = document.querySelectorAll ('button');
let num = [];
let result;
const inputField = document.querySelector ('input').value;

btn_container.addEventListener ('click', (e) => {
    if (e.target.id === 'item1') {
        input.value += '(';
        num.push(input.value);
        result += 1;
    }else if (e.target.id === 'item2') {
        input.value += ')';
        num.push(input.value);
    }else if (e.target.id === 'item3') {
        num.pop();       
        input.value = input.value.toString().slice(0, -1);      
    }else if (e.target.id === 'item4') {
        input.value = '';
    }else if (e.target.id === 'item6') {
        input.value += 7;
        num.push(input.value);
    }else if (e.target.id === 'item7') {
        input.value += 8;
        num.push(input.value);
    }else if (e.target.id === 'item8') {
        input.value += 9;
        num.push(input.value);
    }else if (e.target.id === 'item5') {
        input.value += '%';
        num.push(input.value);
    }else if (e.target.id === 'item11') {
        input.value += 4;
        num.push(input.value);
    }else if (e.target.id === 'item12') {
        input.value += 5;
        num.push(input.value);
    }else if (e.target.id === 'item13') {
        input.value += 6;
        num.push(input.value);
    }else if (e.target.id === 'item14') {
        input.value += '*';
        num.push(input.value);
    }else if (e.target.id === 'item15') {
        input.value += '/';
        num.push(input.value);
    }else if (e.target.id === 'item16') {
        input.value += 1;
        num.push(input.value);
    }else if (e.target.id === 'item17') {
        input.value += 2;
        num.push(input.value);
    }else if (e.target.id === 'item18') {
        input.value += 3;
        num.push(input.value);
    }else if (e.target.id === 'item9') {
        input.value += '+';
        num.push(input.value);
    }else if (e.target.id === 'item10') {
        input.value += '-';
        num.push(input.value);
    }else if (e.target.id === 'item20') {
        input.value += '.';
        num.push(input.value);
    }else if (e.target.id === 'item19') {
        input.value += 0;
        num.push(input.value);
    }
    else if (e.target.id === 'item21') {
        input.value += 0;
        input.value += 0;
        num.push(input.value);
    } else if (e.target.id === 'item22') {
        result = eval(num[num.length-1]);
        input.value = result;
    }
});




