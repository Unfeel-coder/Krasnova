const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const passport = document.querySelector('#passport').value;
  const address = document.querySelector('#address').value;
  const mortgage = document.querySelector('#mortgage').value;
  const type = document.querySelector('#type').value;
  const gender = document.querySelector('#gender').value;
  
  const policyData = {
    name,
    passport,
    address,
    mortgage,
    type,
    gender
  };
  
  // Отправка данных на сервер или сохранение в локальном хранилище
});
