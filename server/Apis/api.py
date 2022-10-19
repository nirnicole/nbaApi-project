import requests


class Api:
    
    def __init__(self, url):
        self.url = url
        self.raw_data = None

    def get_data(self):
        print(self.url)
        response = requests.get(self.url, self.headers)
        try:
            self.raw_data = response.json()
        except:
            self.raw_data = response.text
        return self

    def proccess_data(self):
        pass