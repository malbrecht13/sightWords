
const returnCorrectAudioFile = (cardArrayItem) => {

    switch(cardArrayItem) {
        case 'a': return 'audio/a.m4a';
        case 'am': return 'audio/am.m4a';
        case 'and': return 'audio/and.m4a';
        case 'are': return 'audio/are.m4a';
        case 'at': return 'audio/at.m4a';
        case 'be': return 'audio/be.m4a';
        case 'big': return 'audio/big.m4a';
        case 'but': return 'audio/but.m4a';
        case 'can': return 'audio/can.m4a';
        case 'get': return 'audio/get.m4a';
        case 'have': return 'audio/have.m4a';
        case 'he': return 'audio/he.m4a';
        case 'I': return 'audio/I.m4a';
        case 'is': return 'audio/is.m4a';
        case 'like': return 'audio/like.m4a';
        case 'little': return 'audio/little.m4a';
        case 'look': return 'audio/look.m4a';
        case 'my': return 'audio/my.m4a';
        case 'she': return 'audio/she.m4a';
        case 'so': return 'audio/so.m4a';
        case 'that': return 'audio/that.m4a';
        case 'the': return 'audio/the.m4a';
        case 'was': return 'audio/was.m4a';
        case 'we': return 'audio/we.m4a';
        case 'no': return 'audio/no.m4a';
        case 'yes': return 'audio/yes.m4a';
        default: return;
    }
};

export default class CardSet {
    constructor(cardSet) {
        this._cardSet = cardSet; //an array
    }

    //load first card
    loadFirstCard() {
        const word = document.getElementById('word');
        word.textContent = this._cardSet[0];
        let audio = returnCorrectAudioFile(this._cardSet[0]);
        const audioplayer = document.getElementById('audioplayer');
        audioplayer.setAttribute("src", audio);
    }

    //display new card
    displayNewCard() {
        const btn = document.querySelector('button#next');
        const audioplayer = document.getElementById('audioplayer');
        
        btn.addEventListener('click', (event) => {
            const word = document.getElementById('word');
            let currentWord = word.textContent;
            
            
            for(let i=0; i<this._cardSet.length; i++) {
                if(currentWord === this._cardSet[this._cardSet.length - 1]) {
                    this.loadFirstCard();
                } else if(this._cardSet[i] === currentWord) {
                    word.textContent = this._cardSet[i + 1];
                    let audio = returnCorrectAudioFile(this._cardSet[i + 1]);
                    audioplayer.setAttribute("src", audio);
                }
                
                }
                
        });
    }

    readTheWordAloud() {
        const btn = document.querySelector('button#play-btn');
        const audioplayer = document.getElementById('audioplayer');

        btn.addEventListener('click', (event) => {
            audioplayer.play();
        });
    }

}