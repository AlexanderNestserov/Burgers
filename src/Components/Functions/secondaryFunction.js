
export const totalPriceItems = (order) => {
   const countTopping = order.topping && order.topping.filter(item => item.checked).length;
   const priceTopping = countTopping * (order.price * 0.1);
   return (order.price + priceTopping) * order.count;
};

export const formatCurrency = (str) => {
   return str.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' });
};

export const projection = (rules) => {
   const keys = Object.keys(rules);
   return obj => keys.reduce((newObj, key) => {
      newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null)
      return newObj;
   }, {})
};
