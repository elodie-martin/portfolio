const body = document.querySelector('body');

//Variables réseaux sociaux menu
const globeNav = document.querySelector('.globe-nav');
const linkedinNav = document.querySelector('.linkedin-nav');
const twitterNav = document.querySelector('.twitter-nav');
const githubNav = document.querySelector('.github-nav');
const circleGlobeNav = document.querySelector('.circle-globe-nav');
const circleLinkedinNav = document.querySelector('.circle-linkedin-nav');
const circleTwitterNav = document.querySelector('.circle-twitter-nav');
const circleGithubNav = document.querySelector('.circle-github-nav');

//Variables réseaux sociaux contact
const linkedinContact = document.querySelector('.linkedin-contact');
const twitterContact = document.querySelector('.twitter-contact');
const githubContact = document.querySelector('.github-contact');
const circleLinkedinContact = document.querySelector('.circle-linkedin-contact');
const circleTwitterContact = document.querySelector('.circle-twitter-contact');
const circleGithubContact = document.querySelector('.circle-github-contact');

//Variables Menu
const menu = document.querySelector('.btn-navbar-toggler-icon');
const closeMenu = document.querySelector('.close-nav');
const blocMenu = document.querySelector('.bloc-nav');
const contenuBlocMenu = document.querySelector('.contenu-bloc-nav');
let itemsMenu = document.querySelectorAll('.nav-link');
const iconMenu = document.querySelector('.navbar-toggler-icon');

//Sections
const sectionHome = document.querySelector('#home').offsetTop;
const sectionSkills = document.querySelector('#skills').offsetTop;

//Fonctions changement couleur réseaux sociaux menu au hover
circleGlobeNav.addEventListener('mouseover', function () {
    globeNav.style.color = '#ffffff';
    globeNav.style.transition = '0.3s';
});

circleGlobeNav.addEventListener('mouseout', function () {
    globeNav.style.color = '#8d7688';
    globeNav.style.transition = '0.3s';
});

circleLinkedinNav.addEventListener('mouseover', function () {
    linkedinNav.style.color = '#ffffff';
    linkedinNav.style.transition = '0.3s';
});

circleLinkedinNav.addEventListener('mouseout', function () {
    linkedinNav.style.color = '#8d7688';
    linkedinNav.style.transition = '0.3s';
});

circleTwitterNav.addEventListener('mouseover', function () {
    twitterNav.style.color = '#ffffff';
    twitterNav.style.transition = '0.3s';
});

circleTwitterNav.addEventListener('mouseout', function () {
    twitterNav.style.color = '#8d7688';
    twitterNav.style.transition = '0.3s';
});

circleGithubNav.addEventListener('mouseover', function () {
    githubNav.style.color = '#ffffff';
    githubNav.style.transition = '0.3s';
});

circleGithubNav.addEventListener('mouseout', function () {
    githubNav.style.color = '#8d7688';
    githubNav.style.transition = '0.3s';
});

//Fonctions changement couleur réseaux sociaux contact au hover
circleLinkedinContact.addEventListener('mouseover', function () {
    linkedinContact.style.color = '#ffffff';
    linkedinContact.style.transition = '0.3s';
});

circleLinkedinContact.addEventListener('mouseout', function () {
    linkedinContact.style.color = '#c4e092';
    linkedinContact.style.transition = '0.3s';
});

circleTwitterContact.addEventListener('mouseover', function () {
    twitterContact.style.color = '#ffffff';
    twitterContact.style.transition = '0.3s';
});

circleTwitterContact.addEventListener('mouseout', function () {
    twitterContact.style.color = '#c4e092';
    twitterContact.style.transition = '0.3s';
});

circleGithubContact.addEventListener('mouseover', function () {
    githubContact.style.color = '#ffffff';
    githubContact.style.transition = '0.3s';
});

circleGithubContact.addEventListener('mouseout', function () {
    githubContact.style.color = '#c4e092';
    githubContact.style.transition = '0.3s';
});

//Ouverture menu
menu.addEventListener('click', function () {
    blocMenu.style.display = 'block';
    blocMenu.style.zIndex = '10';
    contenuBlocMenu.style.display = 'block';
    closeMenu.style.display = 'block';
    body.style.overflowY = 'hidden';
});

//Fermeture menu 
closeMenu.addEventListener('click', function () {
    blocMenu.style.display = 'none';
    blocMenu.style.zIndex = '0';
    contenuBlocMenu.style.display = 'none';
    closeMenu.style.display = 'none';
    body.style.overflowY = 'scroll';
})

//Fermeture du menu au clic sur un item
for (let i = 0; i < itemsMenu.length; i++) {
    itemsMenu[i].addEventListener('click', function () {
        blocMenu.style.display = 'none';
        blocMenu.style.zIndex = '0';
        contenuBlocMenu.style.display = 'none';
        closeMenu.style.display = 'none';
        body.style.overflowY = 'scroll';
    })
}

//Changement couleur icône menu au scroll
document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= sectionHome && scrollPosition < sectionSkills) {
        iconMenu.classList.remove('icon-nav-purple');
    } else if (scrollPosition > sectionSkills) {
        iconMenu.classList.add('icon-nav-purple');
    }
});