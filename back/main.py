from flask import Flask
from flask_cors import CORS
from apineo4j import apineo4j

app = Flask(__name__)
PORT = 5000
DEBUG = False
CORS(app)


@app.errorhandler(404)
def not_found(error):
    return "<h1>Not Found</h1>"


@app.route("/", methods=["GET"])
def hello():
    return "<h1>Ingresa la palabra a buscar en la barra de direcciones</h1>" \
            "<p>https://graphora.herokuapp.com/graph/'Palabra'</p>" \
            "<h1>Ingresa letras para encontrar posibles resultados</h1>" \
            "<p>https://graphora.herokuapp.com/search/'Letras'</p>" \
            "<h1>Ingresa la palabra a buscar en la barra de direcciones para obtener las propiedades de la relación</h1>" \
            "<p>https://graphora.herokuapp.com/table/'Palabra'</p>"
            


@app.route("/graph/<word>", methods=["GET"])
def data(word):
    result = apineo4j.getData(word)

    if result != "[]":
        return result
    else:
        return "<h1>Palabra invalida</h1>"


@app.route("/search/<letters>", methods=["GET"])
def search(letters):
    stimulus = apineo4j.allStimulus(letters)
    return stimulus


@app.route("/table/<word>", methods=["GET"])
def table(word):
    tableJSON = apineo4j.generateTableJSON(word)

    if tableJSON != "[]":
        return tableJSON
    else:
        return "<h1>Palabra invalida</h1>"


if __name__ == "__main__":
    app.run(port=PORT, debug=DEBUG)