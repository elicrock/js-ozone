export default function filter() {
  const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById ('min'),
        max = document.getElementById ('max');

  cards.forEach((card) => {
    const cardPrice = card.querySelector('.card-price'),
          price = parseFloat(cardPrice.textContent),
          discount = card.querySelector('.card-sale'),
          activeLi = document.querySelector('.catalog-list li.active');

    card.parentNode.style.display = '';
    
    if ((min.value && price < min.value) || (max.value && price > max.value)) {
      card.parentNode.style.display = 'none';
    } else if (discountCheckbox.checked && !discount){
      card.parentNode.style.display = 'none';
    } else if (activeLi) {
      if (card.dataset.category !== activeLi.textContent) {
        card.parentNode.style.display = 'none';
      }
    }
  });
}