function getCard(){
    card = document.createElement('div');
    card.id= 'card';

    pic = document.createElement('img');
    pic.id = 'pic';
    card.appendChild(pic);

    txt = document.createElement('div');
    txt.id = 'txt';
    txt.txtContent = 'Bahut badhiya khana hai. Kha lo sab.';
    card.appendChild(txt);

    return card;
}
function fillMenu(){
    const content = document.getElementById('content');
    content.innerHTML = '';

    content.setAttribute('style', 'display:flex; flex-wrap:wrap; justify-content:space-around; align-items:center;');

    for(let i=0; i<6; i++){
        content.appendChild(getCard());
    }
}
