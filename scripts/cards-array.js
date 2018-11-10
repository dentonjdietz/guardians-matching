// Cards

//Card Classes 

class Card {

    constructor(imgPath, alt, number){
        this.src = imgPath;
        this.alt = alt;
        this.number = number;
    }

}

const cards = [];
cards[0] = new Card('/images/drax.jpg', 'Drax', 1);
cards[1] = new Card('/images/drax.jpg', 'Drax', 1);
cards[2] = new Card('/images/gamora.jpg.jpg', 'Gamora', 2);
cards[3] = new Card('/images/gamora.jpg', 'Gamora', 2);
cards[4] = new Card('/images/groot.jpg.jpg', 'Groot', 3);
cards[5] = new Card('/images/groot.jpg', 'Groot', 3);
cards[6] = new Card('/images/mantis.jpg.jpg', 'Mantis', 4);
cards[7] = new Card('/images/mantis.jpg', 'Mantis', 4);
cards[8] = new Card('/images/nebula.jpg.jpg', 'Nebula', 5);
cards[9] = new Card('/images/nebula.jpg', 'Nebula', 5);
cards[10] = new Card('/images/rocket.jpg.jpg', 'Rocket', 6);
cards[11] = new Card('/images/rocket.jpg', 'Rocket', 6);
cards[12] = new Card('/images/starlord.jpg.jpg', 'Starlord', 5);
cards[13] = new Card('/images/starlord.jpg', 'Starlord', 5);
cards[14] = new Card('/images/yondu.jpg', 'Yondu', 6);
cards[15] = new Card('/images/yondu.jpg', 'Yondu', 6);