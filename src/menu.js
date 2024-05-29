import './menuStyle.css'

function getCard(){
    const card = document.createElement('div');
    card.id= 'card';

    const pic = document.createElement('img');
    pic.id = 'pic';
    card.appendChild(pic);

    const txt = document.createElement('div');
    txt.id = 'txt';
    txt.innerHTML = 'Bahut badhiya khana hai. <br>Kha lo sab. <br>Pet bhar k khao.';
    card.appendChild(txt);

    return card;
}
function fillMenu(){
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuItems = document.createElement('div');
    menuItems.id = 'menuItems';
    content.appendChild(menuItems);

    for(let i=0; i<6; i++){
        menuItems.appendChild(getCard());
    }
}
export default fillMenu;