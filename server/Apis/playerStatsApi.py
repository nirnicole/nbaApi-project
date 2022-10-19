from .api import Api

class PlayerStatsApi(Api):

    def __init__(self):
        super().__init__("https://nba-players.herokuapp.com/players-stats/")
        self.raw_data = None
        self.headers={"Content-Type": "application/json"}

    def get_data(self, lname, fname):
        self.url = self.url + lname + '/' + fname
        return super().get_data()

    def proccess_data(self):
        res = {
            "gamesPlayed": self.raw_data["games_played"],
            "minutesPG": self.raw_data["minutes_per_game"],
            "fieldGP": self.raw_data["field_goal_percentage"],
            "threePP": self.raw_data["three_point_percentage"],
            "reboundsPG": self.raw_data["rebounds_per_game"],
        }
        return res