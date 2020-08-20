// const invoice = 100;
// const stock = 100;

// // Write code under this line
// const message =
//   invoice <= stock
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!';

// console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
const countryName = 'Китай';
const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase; // Write code on this line
  switch (country) {
    // Write code under this line
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      price >= 0;
      message = NO_DELIVERY;
  }
}
if (price >= 0) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
