export default function addCart() {
  const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

  cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);

      showData();
      const removeBtn = cardClone.querySelector('.btn');
      removeBtn.textContent = 'Удалить';
      // цвет кнопки удалить при наведении меняется
      removeBtn.addEventListener('mouseenter', function () {
        removeBtn.classList.remove('btn-primary');
        removeBtn.classList.add('btn-danger');
      });
      removeBtn.addEventListener('mouseleave', function () {
        removeBtn.classList.remove('btn-danger');
        removeBtn.classList.add('btn-primary');
      });
      // end цвет кнопки удалить при наведении меняется

      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData();
      });
    });
  });

  function showData() {
    const cardsCard = cartWrapper.querySelectorAll('.card'),
      cardsPrice = cartWrapper.querySelectorAll('.card-price'),
      cartTotal = document.querySelector('.cart-total span');
    countGoods.textContent = cardsCard.length;
    let sum = 0;
    cardsPrice.forEach((cardPrice) => {
      let price = parseFloat(cardPrice.textContent);
      sum += price;
    });
    cartTotal.textContent = sum;

    if (cardsCard.length === 0) {
      cartWrapper.appendChild(cartEmpty);
    } else {
      cartEmpty.remove();
    }
  }
}