function changeToRegister(){
    document.getElementById("containerLogin").style.display = 'none';
    document.getElementById("containerRegister").style.display = 'grid';
}

function changeToLogin(){
    document.getElementById("containerRegister").style.display = 'none';
    document.getElementById("containerLogin").style.display = 'grid';
}



function changeWindowToRegister(){
    window.location.href = "login.html";
}

function changeImg1(){
    document.getElementById("carrousel-imagen-1").style.display = 'flex';
    document.getElementById("carrousel-imagen-2").style.display = 'none';
    document.getElementById("carrousel-imagen-3").style.display = 'none';
    document.getElementById("carrousel-imagen-4").style.display = 'none';
    document.getElementById("carrousel-imagen-5").style.display = 'none';
    document.getElementById("carrousel-imagen-6").style.display = 'none';
}

function changeImg2(){
    document.getElementById("carrousel-imagen-1").style.display = 'none';
    document.getElementById("carrousel-imagen-2").style.display = 'flex';
    document.getElementById("carrousel-imagen-3").style.display = 'none';
    document.getElementById("carrousel-imagen-4").style.display = 'none';
    document.getElementById("carrousel-imagen-5").style.display = 'none';
    document.getElementById("carrousel-imagen-6").style.display = 'none';
}

function changeImg3(){
    document.getElementById("carrousel-imagen-1").style.display = 'none';
    document.getElementById("carrousel-imagen-2").style.display = 'none';
    document.getElementById("carrousel-imagen-3").style.display = 'flex';
    document.getElementById("carrousel-imagen-4").style.display = 'none';
    document.getElementById("carrousel-imagen-5").style.display = 'none';
    document.getElementById("carrousel-imagen-6").style.display = 'none';
}

function changeImg4(){
    document.getElementById("carrousel-imagen-1").style.display = 'none';
    document.getElementById("carrousel-imagen-2").style.display = 'none';
    document.getElementById("carrousel-imagen-3").style.display = 'none';
    document.getElementById("carrousel-imagen-4").style.display = 'flex';
    document.getElementById("carrousel-imagen-5").style.display = 'none';
    document.getElementById("carrousel-imagen-6").style.display = 'none';
}

function changeImg5(){
    document.getElementById("carrousel-imagen-1").style.display = 'none';
    document.getElementById("carrousel-imagen-2").style.display = 'none';
    document.getElementById("carrousel-imagen-3").style.display = 'none';
    document.getElementById("carrousel-imagen-4").style.display = 'none';
    document.getElementById("carrousel-imagen-5").style.display = 'flex';
    document.getElementById("carrousel-imagen-6").style.display = 'none';
}

function changeImg6(){
    document.getElementById("carrousel-imagen-1").style.display = 'none';
    document.getElementById("carrousel-imagen-2").style.display = 'none';
    document.getElementById("carrousel-imagen-3").style.display = 'none';
    document.getElementById("carrousel-imagen-4").style.display = 'none';
    document.getElementById("carrousel-imagen-5").style.display = 'none';
    document.getElementById("carrousel-imagen-6").style.display = 'flex';
}