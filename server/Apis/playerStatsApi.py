from .api import Api

class PlayerStatsApi(Api):


    def __init__(self, base_url= "https://nba-players.herokuapp.com/"):
        super().__init__()
        self.url = base_url

    def make_call(self, method = "GET", resources = "", headers = {"Content-Type": "application/json"}):
        self.headers = headers
        self.resources = resources
        self.method = method
        return super().make_call()

    def proccess_data(self):
        res = {
            "gamesPlayed": self.raw_data["games_played"],
            "minutesPG": self.raw_data["minutes_per_game"],
            "fieldGP": self.raw_data["field_goal_percentage"],
            "threePP": self.raw_data["three_point_percentage"],
            "reboundsPG": self.raw_data["rebounds_per_game"],
        }
        return res