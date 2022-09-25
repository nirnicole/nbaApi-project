import requests


class Api:

    def __init__(self, url):
        self.url = url
        self.headers={"Content-Type": "application/json"}

    def get_data(self):
        response = requests.get(self.url, self.headers)
        return response.json()


    def proccess_data(self):
        pass