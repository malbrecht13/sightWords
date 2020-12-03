import CardSet from "./card.js";

const kindergartenWords = ['a', 'am', 'and', 'are', 'at', 'be'
, 'big', 'but', 'can', 'get', 'have', 'he', 'I', 'is'
, 'like', 'little', 'look', 'my', 'she', 'so', 'that'
, 'the', 'was', 'we'];

const kWords = new CardSet(kindergartenWords);

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {

    kWords.loadFirstCard();
    kWords.displayNewCard();
    kWords.readTheWordAloud();
   
};




