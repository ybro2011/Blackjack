from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_from_directory('main', 'main.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000) 