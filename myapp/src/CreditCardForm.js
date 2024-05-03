import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './CreditCardForm.css';

const CreditCardForm = ({ onSend }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const cardData = {
      cardNumber: data.cardNumber,
      cardDate: `${data.cardMonth}/${data.cardDate}`,
      cvc: data.cvc
    };
    onSend(cardData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="credit-card-form">
      <div className="card-input">
        <label>Номер карты:</label>
        <input type="text" {...register('cardNumber')} />
      </div>
      <div className="card-input">
        <label>Месяц/Год:</label>
        <div className="date-input">
          <input type="text" {...register('cardMonth')} />
          <span>/</span>
          <input type="text" {...register('cardDate')} />
        </div>
      </div>  
      <div className="card-input">
        <label>CVC код:</label>
        <input type="text" {...register('cvc')} />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default CreditCardForm;
