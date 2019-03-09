//Variables réseaux sociaux
const linkedin = document.querySelector('.fa-linkedin-in');
const twitter = document.querySelector('.fa-twitter');
const github = document.querySelector('.fa-github');
const circleLinkedin = document.querySelector('.circle-linkedin');
const circleTwitter = document.querySelector('.circle-twitter');
const circleGithub = document.querySelector('.circle-github');

//Fonctions changement couleur picto hover
circleLinkedin.addEventListener('mouseover', function () {
    linkedin.style.color = '#ffffff';
    linkedin.style.transition = '0.3s';
});

circleLinkedin.addEventListener('mouseout', function () {
    linkedin.style.color = '#c4e092';
    linkedin.style.transition = '0.3s';
});

circleTwitter.addEventListener('mouseover', function () {
    twitter.style.color = '#ffffff';
    twitter.style.transition = '0.3s';
});

circleTwitter.addEventListener('mouseout', function () {
    twitter.style.color = '#c4e092';
    twitter.style.transition = '0.3s';
});

circleGithub.addEventListener('mouseover', function () {
    github.style.color = '#ffffff';
    github.style.transition = '0.3s';
});

circleGithub.addEventListener('mouseout', function () {
    github.style.color = '#c4e092';
    github.style.transition = '0.3s';
});