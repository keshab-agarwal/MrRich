from flask import Flask 

app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/<id>', methods=['GET'])
def template(id):
    return {
        'id': f'{id}'
    }

if __name__ == '__main__':
    app.run(debug=True)