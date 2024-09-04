from flask import Flask, render_template, request, jsonify
from jinja2 import Template, TemplateSyntaxError

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Debugging: Print received message
    print(f"Received message: {message}")

    try:
        # Render the message field with Jinja2 without escaping
        template = Template(message)
        evaluated_message = template.render()

        # Debugging: Print evaluated message
        print(f"Evaluated message: {evaluated_message}")
    except Exception as e:
        evaluated_message = f"Error evaluating template: {str(e)}"
        print(f"Template evaluation error: {str(e)}")

    # Return the evaluated message as JSON
    return jsonify({
        'name': name,
        'email': email,
        'message': evaluated_message
    })

if __name__ == '__main__':
    app.run(debug=True)
