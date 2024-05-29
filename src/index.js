import './homeStyles.css';
import fillHome from './home';
import fillMenu from './menu';
import fillAbout from './about';

const content = document.getElementById('content');
content.innerHTML = '';

const sub = document.createElement('div');
sub.id = 'subtitle';
sub.textContent = 'The best food in town';
content.appendChild(sub);

const title = document.createElement('div');
title.id = 'title';
title.textContent = 'Amazing restaurant';
content.appendChild(title);

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', fillHome);

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', fillMenu);

const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', fillAbout);