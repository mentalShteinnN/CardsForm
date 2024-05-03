import React, { useState } from 'react';
import CreditCardForm from './CreditCardForm';
import CreditCardTable from './CreditCardTable';

const App = () => {
  const [cards, setCards] = useState([]);

  const handleAddCard = (cardData) => {
    setCards([...cards, cardData]);
  };

  return (
    <div>
      <CreditCardForm onSend={handleAddCard} />
      <CreditCardTable cardData={cards} />
    </div>
  );
};

export default App;