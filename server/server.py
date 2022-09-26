import os
import pathlib
from fastapi import FastAPI, Response
from Apis.nbaApi import NbaApi
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()
caching_metadata = []
app.mount('/user', StaticFiles(directory='..\client'), name='client')


@app.get('/')
def root(response: Response):
    return "welcome to a costume NBA server"


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

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)