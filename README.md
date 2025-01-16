const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const loanAmount = parseInt(document.querySelector('#loan_amount').value);
  const loanTerm = parseInt(document.querySelector('#loan_term').value);
  const age = parseInt(document.querySelector('#age').value);
  const gender = document.querySelector('#gender').value;

  // Расчет страховой премии
  let premium = 0;
  if (age < 30) {
    premium = loanAmount * 0.01;
  } else if (age < 40) {
    premium = loanAmount * 0.012;
  } else if (age < 50) {
    premium = loanAmount * 0.014;
  } else {
    premium = loanAmount * 0.016;
  }

  if (gender === 'female') {
    premium *= 0.95;
  }

  // Расчет ежемесячного платежа
  const monthlyPayment = premium / loanTerm;

  // Вывод результата
  document.querySelector('#result').innerHTML = Ⓝ
    <p>Страховая премия: ${premium.toFixed(2)} руб.</p>
    <p>Ежемесячный платеж: ${monthlyPayment.toFixed(2)} руб.</p>
  Ⓝ;
});
