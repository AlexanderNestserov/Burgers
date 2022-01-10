import React from 'react';


export const totalPriceItems = (order) => {
   return order.price * order.count;
};

export const formatCurrency = (str) => {
   str = str.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' });
   return str
};