from .nbaImgApi import NbaImgApi
from .api import Api

class NbaApi(Api):
    teams_id = {
        "lakers": "1610612747",
        "warriors": "1610612744",
        "heat": "1610612748",
        "suns": "1610612756",
        "pelicans": "1610612740"
    }

    def __init__(self, year=2018, team_name=None, isActive = False):
        super().__init__("http://data.nba.net/10s/prod/v1/"+f"{year}/players.json")
        self.year = year
        self.team_name = team_name
        self.isActive = isActive
        self.raw_data = None
        self.headers={"Content-Type": "application/json"}


    def proccess_data(self):
        leagues = self.raw_data["league"]
        team_id = self.teams_id[self.team_name]
        results = []
        for league in leagues:
            results += [{
                "id": player["personId"],
                "fname": player["firstName"],
                "lname":player["lastName"],
                "jersey":player["jersey"],
                "position":player["pos"],
                "isActive":player["isActive"],
                "img": NbaImgApi(player["lastName"], player["firstName"]).url
               } for player in leagues[league] if (self.isActive and bool(player["isActive"]) or not self.isActive ) and player["teamId"] == team_id]
        self.proccessed_data = results
        return results