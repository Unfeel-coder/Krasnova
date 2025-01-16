const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: e.target.querySelector('#name').value,
    surname: e.target.querySelector('#surname').value,
    patronymic: e.target.querySelector('#patronymic').value,
    birthdate: e.target.querySelector('#birthdate').value,
    policy_number: e.target.querySelector('#policy_number').value,
    policy_amount: e.target.querySelector('#policy_amount').value,
    term: e.target.querySelector('#term').value,
  };

  fetch('/submit-policy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
});
