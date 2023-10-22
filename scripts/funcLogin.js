function changeToRegister(){
    document.getElementById("containerLogin").style.display = 'none';
    document.getElementById("containerRegister").style.display = 'grid';
}

function changeToLogin(){
    document.getElementById("containerRegister").style.display = 'none';
    document.getElementById("containerLogin").style.display = 'grid';
}


function openPagShop(){
    let datoMail = document.getElementById('datoMail').value;
    let datoPass = document.getElementById('datoPass').value;
    if (datoMail == 'admin@gmail.com' && datoPass == '1234') {
        window.open('shop.html', '_blank')
    };
};