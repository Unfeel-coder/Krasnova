<!DOCTYPE html>
<html>
<head>
  <title>Онлайн-калькулятор страхования ипотеки</title>
</head>
<body>
  <h1>Онлайн-калькулятор страхования ипотеки</h1>
  <form>
    <label for="loan_amount">Сумма кредита:</label>
    <input type="number" id="loan_amount">

    <label for="loan_term">Срок кредита (в месяцах):</label>
    <input type="number" id="loan_term">

    <label for="age">Ваш возраст:</label>
    <input type="number" id="age">

    <label for="gender">Ваш пол:</label>
    <select id="gender">
      <option value="male">Мужской</option>
      <option value="female">Женский</option>
    </select>

    <input type="submit" value="Рассчитать">
  </form>
  <div id="result"></div>
</body>
</html>
