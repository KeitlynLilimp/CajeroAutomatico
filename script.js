function actualizarSaldo() {
    document.getElementById('saldo').textContent =
        localStorage.getItem('saldo');
}

function enviar() {
    let numero = document.querySelector('.input');
    let texto = document.querySelector('.texto');
    let opcion = numero.value;

    if (opcion == 1) {
        window.open('retiro.html', '_self');
    } else if (opcion == 2) {
        window.open('deposito.html', '_self');
    } else {
        texto.innerHTML = 'Esa no es una opcion';
        texto.style.color = 'red';
    }
}

function retirar() {
    let nombre = document.querySelector('.input-nombre');
    let cedula = document.querySelector('.input-cedula');
    let numero = document.querySelector('.input-retiro');
    let nombreValue = nombre.value;
    let cedulaValue = cedula.value;
    let retiro = parseFloat(numero.value);
    let saldo = parseFloat(localStorage.getItem('saldo'));
    let texto = document.querySelector('.texto');

    if (isNaN(retiro)) {
        alert('Introduce un numero valido');
        return;
    }

    if (retiro === 0) {
        window.open('index.html', '_self');
        return;
    }

    if (retiro > saldo) {
        alert('No tienes suficiente saldo');
        return;
    }

    saldo -= retiro;
    localStorage.setItem('saldo', saldo.toString());
    actualizarSaldo();

    texto.innerHTML = `Recivo del retiro </br> Nombre: ${nombreValue}</br>Cedula: ${cedulaValue} </br>Retiro: ${retiro}`;
}

function depositar() {
    let numero = document.querySelector('.input');
    let deposito = parseFloat(numero.value); // Convertir a número aquí
    let saldo = parseFloat(localStorage.getItem('saldo'));

    if (isNaN(deposito)) {
        alert('Introduce un numero valido');
        return;
    }

    if (deposito === 0) {
        window.open('index.html', '_self');
        return;
    }

    saldo += deposito;
    localStorage.setItem('saldo', saldo.toString());
    actualizarSaldo();
}

function menuPrincipal() {
    window.open('index.html', '_self');
}
