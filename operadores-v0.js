function Somar(){
    let v01 = parseFloat(prompt('valor 01'));
    alert(`O valor 01 digitado foi: ${v01}`);

    let v02 = parseFloat(prompt('Valor 02'));
    alert(`O valor 02 digitado foi: ${v02}`);

    /*esse codigo vai pegar o display do resultado que esta none e transforma-lo em flex. assim ele ficara visivel */
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é: ${v01 + v02}`;
    
};

function Subtrair(){
    let v01 = parseFloat(prompt('valor 01'));
    alert(`O valor 01 digitado foi: ${v01}`);

    let v02 = parseFloat(prompt('Valor 02'));
    alert(`O valor 02 digitado foi: ${v02}`);

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é: ${v01 - v02}`;


};

function Multiplicar(){
    let v01 = parseFloat(prompt('valor 01'));
    alert(`O valor 01 digitado foi: ${v01}`);

    let v02 = parseFloat(prompt('Valor 02'));
    alert(`O valor 02 digitado foi: ${v02}`);


    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é: ${v01 * v02}`;



};

function Dividir(){
    let v01 = parseFloat(prompt('valor 01'));
    alert(`O valor 01 digitado foi: ${v01}`);

    let v02 = parseFloat(prompt('Valor 02'));
    alert(`O valor 02 digitado foi: ${v02}`);

   
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é: ${v01 / v02}`;



};
