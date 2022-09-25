from functools import total_ordering
from fastapi import FastAPI, Response
import uvicorn
from heapq import heappop, heappush, heapify
from Apis.nbaApi import NbaApi
from Apis.nbaImgApi import NbaImgApi

app = FastAPI()
caching_metadata = {}

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
    caller = NbaApi(year, team)
    caller.get_data()
    caching_metadata = caller.proccess_data()
    # return "data fetched, enjoy this server!~"
    return caching_metadata

# redirection
@app.get('/player-img')
def get_players(response: Response, lname, fname):
    response.headers['Access-Control-Allow-Origin'] = "*"
    print(lname)
    print(fname)
    caller = NbaImgApi(lname, fname)
    return f"<img src=\"{caller.url}\">"


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