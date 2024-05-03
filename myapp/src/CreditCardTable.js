import React from 'react';
import './CreditCardTable.css';

const CreditCardTable = ({ cardData }) => {
  return (
    <table className="credit-card-table">
      <thead>
        <tr>
          <th>Номер карты</th>
          <th>Месяц/Год</th>
          <th>CVC</th>
        </tr>
      </thead>
      <tbody>
        {cardData.map((data, index) => (
          <tr key={index}>
            <td>{data.cardNumber}</td>
            <td>{data.cardDate}</td>
            <td>{data.cvc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CreditCardTable;