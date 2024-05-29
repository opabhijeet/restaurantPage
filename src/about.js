import './aboutStyle.css'

function fillAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const box = document.createElement('div');
    box.id = 'aboutBox';
    box.innerHTML = 'This is a restaurant website. <br> We serve the best food in town. <br> Come and enjoy the food.<br> We are open 24x7.<br> We are located at the heart of the city.';
    content.appendChild(box);
}
export default fillAbout;