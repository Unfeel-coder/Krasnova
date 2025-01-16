from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit-policy', methods=['POST'])
def submit_policy():
  data = request.get_json()
  # Сохранить данные полиса в базу данных или выполнить другое действие
  return jsonify({'success': True})

if __name__ == '__main__':
  app.run(debug=True)
