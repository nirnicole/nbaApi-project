from .api import Api

class NbaImgApi(Api):

    def __init__(self, last_name, first_name):
        super().__init__("https://nba-players.herokuapp.com/"+f"players/{last_name}/{first_name}")
        self.last_name = last_name
        self.first_name = first_name
        self.raw_data = None
        self.headers={"Content-Type": "image/png"}

    def proccess_data(self):
        return self.url
        # if self.raw_data == "Sorry, that player was not found. Please check the spelling." :
        #     return "http://localhost:8000/static/defaultImg.png"
        # else:
        #     self.proccessed_data = self.raw_data
        #     return self.url

    