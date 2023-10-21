function expandMenu(){
    document.querySelector('.navSmallPageDeployMenu').style.display = 'flex';
    document.getElementById('logMenu').style.display = 'none'
    document.getElementById('closeMenu').style.display = 'block';
}

function shutMenu(){
    document.querySelector('.navSmallPageDeployMenu').style.display = 'none';
    document.getElementById('logMenu').style.display = 'block'
    document.getElementById('closeMenu').style.display = 'none';
}

const menu = document.getElementById('menuSmall')
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        shutMenu()
    }
});