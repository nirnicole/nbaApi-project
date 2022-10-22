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

    def __init__(self, base_url= "http://data.nba.net/"):
        super().__init__()
        self.url = base_url

    def make_call(self, method = "GET", resources = "", headers = {"Content-Type": "application/json"}):
        self.headers = headers
        self.resources = resources
        self.method = method
        return super().make_call()


    def proccess_data(self, team_name, isActive=False):
        EXTERNAL_IMG_API_BASE_URL = "https://nba-players.herokuapp.com/"
        leagues = self.raw_data["league"]
        team_id = self.teams_id[team_name]
        results = []
        for league in leagues:
            results += [{
                "id": player["personId"],
                "fname": player["firstName"],
                "lname":player["lastName"],
                "jersey":player["jersey"],
                "position":player["pos"],
                "isActive":player["isActive"],
                "img": NbaImgApi(EXTERNAL_IMG_API_BASE_URL).url + "players/"+player["lastName"]+"/"+player["firstName"],
                "dreamTeam": False
               } for player in leagues[league] if (isActive and bool(player["isActive"]) or not isActive ) and player["teamId"] == team_id]
        self.proccessed_data = results
        return results