from mimetypes import init
import requests
from api import Api

class NbaApi(Api):

    def __init__(self, url="http://data.nba.net/10s/prod/v1/", year=2018, team_name=None):
        super.__init__(url+f"{year}/players.json")
        self.year = year
        self.team_name = team_name

    def proccess_data(self):
        pass