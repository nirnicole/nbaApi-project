from .api import Api

class NbaImgApi(Api):

    def __init__(self, last_name, first_name):
        super().__init__("https://nba-players.herokuapp.com"+f"/players/{last_name}/{first_name}")
        self.last_name = last_name
        self.first_name = first_name
        self.raw_data = None
        self.headers={"Content-Type": "image/png"}


    