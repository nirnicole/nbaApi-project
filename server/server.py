from functools import total_ordering
from fastapi import FastAPI, Response
import uvicorn
from heapq import heappop, heappush, heapify
from Apis import api

app = FastAPI()

@app.get('/')
def root(response: Response):
    response.headers['Access-Control-Allow-Origin'] = "*"
    exampleApi = api.Api("http://data.nba.net/10s/prod/v1/2018/players.json")
    res = exampleApi.get_data()
    return res
    
@app.get('/sanity')
def sanity():
    return "sanity check"

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