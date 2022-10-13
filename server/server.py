from typing import Union
from urllib.request import Request
from fastapi import FastAPI, Response
from pydantic import BaseModel
from Apis.nbaApi import NbaApi
from fastapi.staticfiles import StaticFiles
import uvicorn

app = FastAPI()
caching_metadata = []

class Item(BaseModel):
    data: str
    # description: Union[str, None] = None


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
def get():
    pass

@app.post('/dreamTeam/')
def post(data: Item):
    print("hello im posting data: \n", data)
    return data

@app.put('/dreamTeam/')
def put():
    pass

@app.delete('/dreamTeam/')
def delete(data: Item):
    print("hello im deleting data: \n", data)
    return data
    
app.mount('/', StaticFiles(directory='..\client', html = True), name='client')


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)