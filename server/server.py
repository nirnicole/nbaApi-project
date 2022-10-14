from typing import Union
from urllib.request import Request
from fastapi import FastAPI, Response
from pydantic import BaseModel
from Apis.nbaApi import NbaApi
from fastapi.staticfiles import StaticFiles
import uvicorn

app = FastAPI()
caching_metadata = []
caching_dreamteam = {}

class Player(BaseModel):
    # data: Player
    id: int
    fname: str
    lname: str
    jersey: int
    position:str
    isActive: bool
    img: str
    dreamTeam: bool


@app.get('/sanity')
def sanity():
    return "sanity check"

@app.get('/players')
def get_players(response: Response, year=2018, team="warriors", isActive=False):
    global caching_metadata
    response.headers['Access-Control-Allow-Origin'] = "*"
    caching_metadata = NbaApi(year, team, isActive).get_data().proccess_data()
    return caching_metadata

@app.get('/dreamTeam/')
def get(response: Response):
    global caching_dreamteam
    return list(caching_dreamteam.values())

@app.post('/dreamTeam/')
def post(data: Player):
    global caching_dreamteam
    data.dreamTeam = True
    caching_dreamteam[data.id] = data
    return data

@app.put('/dreamTeam/')
def put():
    pass

@app.delete('/dreamTeam/')
def delete(data: Player):
    global caching_dreamteam
    player = caching_dreamteam[data.id]
    del caching_dreamteam[data.id]
    print("hello im deleting data: \n", player)
    return player

app.mount('/', StaticFiles(directory='..\client', html = True), name='client')


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)