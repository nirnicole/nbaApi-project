from fastapi import FastAPI, Response
from Apis.nbaApi import NbaApi
from fastapi.staticfiles import StaticFiles
import uvicorn

app = FastAPI()
caching_metadata = []

@app.get('/sanity')
def sanity():
    return "sanity check"

@app.get('/players')
def get_players(response: Response, year=2018, team="warriors"):
    global caching_metadata
    response.headers['Access-Control-Allow-Origin'] = "*"
    caching_metadata = NbaApi(year, team).get_data().proccess_data()
    return caching_metadata


@app.post('/')
def post():
    pass

@app.put('/')
def put():
    pass

@app.delete('/')
def delete():
    pass

app.mount('/', StaticFiles(directory='..\client',html = True), name='client')


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)