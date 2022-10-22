from .api import Api

class NbaImgApi(Api):
    def __init__(self, base_url= "https://nba-players.herokuapp.com/"):
        super().__init__()
        self.url = base_url

    def make_call(self, method = "GET", resources = "", headers = {"Content-Type": "application/json"}):
        self.headers = headers
        self.resources = resources  #f"players/{last_name}/{first_name}"
        self.method = method
        return super().make_call()

    
    def proccess_data(self):
        return self.url


    