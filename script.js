const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const remainingMortgageAmount = document.querySelector('#remaining-mortgage-amount').value;
  const propertyType = document.querySelector('#property-type').value;
  const gender = document.querySelector('#gender').value;

  // Здесь можно сохранить данные на сервер или выполнить другие действия с введенной информацией.
  console.log({ remainingMortgageAmount, propertyType, gender });
});
