from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/static/js/app.js')
def serve_js():
    return app.send_static_file('js/app.js')

if __name__ == '__main__':
    app.run(debug=True)
