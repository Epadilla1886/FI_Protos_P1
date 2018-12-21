$(document).ready( initializeApp );

function initializeApp(){
    console.log('Initializing App...');

    var dynamicCol = $('.container .col:nth-child(2)');

    dynamicCol.append('<h1>Dynamic Content</h1>')

    function createCard(suit, rank) {
            var card = $('<div>', {
                class: 'card ' + suit + ' ' + rank,
                click: togglecardBack
            });
            return card;
      }
    var firstCard = createCard('heart', 'ten');
    dynamicCol.append(firstCard);


    function createRandomCard(){
            var suitArray = ['heart', 'club', 'diamond', 'spade'];
            var rankArray = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
            var suitIndex = Math.floor(Math.random() * suitArray.length);
            var rankIndex = Math.floor(Math.random() * rankArray.length);
            var randomSuit = suitArray[suitIndex];
            var randomRank = rankArray[rankIndex];
            var randomCard = createCard(randomSuit, randomRank);
            return randomCard;
    }
    var firstRandomCard = createRandomCard();
    dynamicCol.append(firstRandomCard);

    function addRandomCardToDom(){
        var randomCard = createRandomCard();
        $('.container .col:nth-child(2)').append(randomCard);
           }
           addRandomCardToDom()

        var addCardButton = $('<button>', {
            text: 'Add Card to DOM',
            click: addRandomCardToDom
        });
        dynamicCol.prepend(addCardButton);

    function togglecardBack(){
        var clickedCard = $(this);
        clickedCard.toggleClass('back');
    }
}