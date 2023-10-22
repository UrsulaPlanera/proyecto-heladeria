function expandMenu(){
    document.getElementById('navUser').style.display = 'flex';
    document.getElementById('closeMenuUser').style.display = 'block';
    document.getElementById('logUser').style.display = 'none';
}

function shutMenu(){
    document.getElementById('navUser').style.display = 'none';
    document.getElementById('closeMenuUser').style.display = 'none';
    document.getElementById('logUser').style.display = 'flex';
}

const menu = document.getElementById('navUser')
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        shutMenu()
    }
});

function showDatosPersonales(){
    document.getElementById('perfilCuerpoDatos-1').style.display = 'none';
    document.getElementById('perfilCuerpoDatos-2').style.display = 'flex';
    document.getElementById('perfilCuerpoDatos-3').style.display = 'none';
}

function showHistorialCompras(){
    document.getElementById('perfilCuerpoDatos-1').style.display = 'none';
    document.getElementById('perfilCuerpoDatos-2').style.display = 'none';
    document.getElementById('perfilCuerpoDatos-3').style.display = 'flex';
}