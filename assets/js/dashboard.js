//Ouverture sidebar mobile
const btnNavDasboard = document.querySelector('.button-nav-top-dashboard');
const sidebar = document.querySelector('#sidebar');
let openSidebar = 0;

btnNavDasboard.addEventListener('click', function () {

    if (openSidebar === 0) {
        sidebar.style.transition = '0.6s';
        sidebar.style.left = '0';
        btnNavDasboard.style.left = '330px';
        btnNavDasboard.style.transition = '0.6s';
        openSidebar = 1;
    } else if (openSidebar === 1) {
        sidebar.style.left = '-300px';
        sidebar.style.transition = '0.6s';
        btnNavDasboard.style.left = '30px';
        btnNavDasboard.style.transition = '0.6s';
        openSidebar = 0;
    }
});