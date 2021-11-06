from flask import Flask 


app = Flask(__name__)

@app.route('/<id>', methods=['GET'])
def template(id):
    return {
        'id': f'{id}'
    }

if __name__ == '__main__':
    app.run(debug=True)