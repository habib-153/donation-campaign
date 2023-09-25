const getStoredCard = () =>{
    const storedCard = localStorage.getItem('cards')
    if(storedCard){
        return JSON.parse(storedCard);
    }
    return [];
}

const saveCard = id =>{
    const storedCards = getStoredCard();
    const exists = storedCards.find(cardId => cardId === id)
    if(!exists){
        storedCards.push(id);
        localStorage.setItem('cards', JSON.stringify(storedCards))
    }
}

export { getStoredCard, saveCard}