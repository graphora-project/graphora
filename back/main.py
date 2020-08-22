from flask import Flask
from flask_cors import CORS
import myNeo4j

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "<h1>Ingresa la palabra a buscar en la barra de direcciones</h1>"

@app.route("/<word>")
def getJSON(word):
    data = myNeo4j.getData(word)
    #data = word
    if (data != "[]"):
        return data
    else:
        return "<h1>Palabra invalida</h1>"

if __name__ == "__main__":
    app.run(debug=True)
