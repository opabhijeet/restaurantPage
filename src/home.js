function fillHome(){
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList = [];
    content.classList.add('hcontent');

    const sub = document.createElement('div');
    sub.id = 'subtitle';
    sub.textContent = 'The best food in town';
    content.appendChild(sub);

    const title = document.createElement(div);
    title.id = 'title';
    title.textContent = 'Amazing restaurant';
    content.appendChild(title);
}