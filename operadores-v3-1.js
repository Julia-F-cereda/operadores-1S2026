const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');


const resultado = document.getElementById('resultado');
function somar(){
    //ele ta pegando o input definido la fora e transformando ele em input
    const v01 = parseFloat(input01.value);
    const v02 = parseFloat(input02.value);

     //confere se tem valor que nao é numero
     if (isNaN(v01) || isNaN(v02)) {
        alert('Um dos valores esta invalido');
     } else{
        //exibe a area de resultado
        resultado.style.display = 'flex';

        //exibe a mensagem com o calculo
    resultado.innerHTML = ` 
            <h2>Memória de calculo</h2>
            <ul>
            <li>operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v01} </span> </li>
            <li>Valor 02 digitado pelo usuário:<span> ${v02} </span> </li>       
            <li>O resultado da operação é ${v01} + ${v02} = <span> ${v01 + v02}</span></li>
        </ul>`
     }

  
};
function subtrair(){
    //ele ta pegando o input definido la fora e transformando ele em input
    const v01 = parseFloat(input01.value);
    const v02 = parseFloat(input02.value);
    
     //confere se tem valor que nao é numero
     if (isNaN(v01) || isNaN(v02)) {
        alert('Um dos valores esta invalido');
     } else{
        //exibe a area de resultado
        resultado.style.display = 'flex';

        //exibe a mensagem com o calculo
    resultado.innerHTML = ` 
            <h2>Memória de calculo</h2>
            <ul>
            <li>operação: <span>SUBTRAÇÃO</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v01} </span> </li>
            <li>Valor 02 digitado pelo usuário:<span> ${v02} </span> </li>       
            <li>O resultado da operação é ${v01} - ${v02} = <span> ${v01 - v02}</span></li>
        </ul>`
     }
};
function multiplicar(){
    //ele ta pegando o input definido la fora e transformando ele em input
    const v01 = parseFloat(input01.value);
    const v02 = parseFloat(input02.value);
    
     //confere se tem valor que nao é numero
     if (isNaN(v01) || isNaN(v02)) {
        alert('Um dos valores esta invalido');
     } else{
        //exibe a area de resultado
        resultado.style.display = 'flex';

        //exibe a mensagem com o calculo
    resultado.innerHTML = ` 
            <h2>Memória de calculo</h2>
            <ul>
            <li>operação: <span>MULTIPLICAÇÃO</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v01} </span> </li>
            <li>Valor 02 digitado pelo usuário:<span> ${v02} </span> </li>       
            <li>O resultado da operação é ${v01} * ${v02} = <span> ${v01 * v02}</span></li>
        </ul>`
     }
};

function dividir(){
    //ele ta pegando o input definido la fora e transformando ele em input
    const v01 = parseFloat(input01.value);
    const v02 = parseFloat(input02.value);
    
     //confere se tem valor que nao é numero
     if (isNaN(v01) || isNaN(v02)) {
        alert('Um dos valores esta invalido');
     } else{
        //exibe a area de resultado
        resultado.style.display = 'flex';

        //exibe a mensagem com o calculo
    resultado.innerHTML = ` 
            <h2>Memória de calculo</h2>
            <ul>
            <li>operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v01} </span> </li>
            <li>Valor 02 digitado pelo usuário:<span> ${v02} </span> </li>       
            <li>O resultado da operação é ${v01} / ${v02} = <span> ${v01 / v02}</span></li>
        </ul>`
     }
};

function porcentagem(){
    const v01 = parseFloat(input01.value);
    const v02 = parseFloat(input02.value);
    
     //confere se tem valor que nao é numero
     if (isNaN(v01) || isNaN(v02)) {
        alert('Um dos valores esta invalido');
     } else{
        //exibe a area de resultado
        resultado.style.display = 'flex';

        //exibe a mensagem com o calculo
    resultado.innerHTML = ` 
            <h2>Memória de calculo</h2>
            <ul>
            <li>operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v01} </span> </li>
            <li>Valor 02 digitado pelo usuário:<span> ${v02} </span> </li>       
            <li>O resultado da operação é ${v01} / ${v02} = <span> ${v02 / 100}</span></li>
        </ul>`
     }
};

function calcPagVista(){};
function calcPagVista(){};