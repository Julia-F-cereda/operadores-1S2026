const verificaV1 = document.getElementById('valor01');
const verificaV2 = document.getElementById('valor02');

function Verifica(){
    if(verificaV1.value === '' || verificaV2.value === '') {
        alert('valor 01 ou valor 02 em branco, digite um numero.');
    }else{
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';


};
};


function Somar(){
    Verifica();
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `
        <h2>Memória de calculo</h2>
            <ul>
            <li>operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário:<span> ${v2} </span> </li>       
            <li>O resultado da operação é ${v1} + ${v2} = <span> ${v1 + v2}</span></li>
        </ul>
        `;
};



function Subtrair(){
    Verifica();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <h2>Memória de calculo</h2>
        <ul>
        <li>operação: <span>SOMA</span> </li>
        <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
        <li>Valor 02 digitado pelo usuário:<span> ${v2} </span> </li>       
        <li>O resultado da operação é ${v1} - ${v2} = <span> ${v1 - v2}</span></li>
    </ul>
    `;
};


function Multiplicar(){
    Verifica();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <h2>Memória de calculo</h2>
        <ul>
        <li>operação: <span>SOMA</span> </li>
        <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
        <li>Valor 02 digitado pelo usuário:<span> ${v2} </span> </li>       
        <li>O resultado da operação é ${v1} - ${v2} = <span> ${v1 - v2}</span></li>
    </ul>
    `

};


function Limpar(){
    document.getElementById('resultado').style.display = 'none';

    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';
};
