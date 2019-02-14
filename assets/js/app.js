/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
require('../../node_modules/bootstrap/dist/js/bootstrap.js');
require('../scss/main_dashboard.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

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
})
 