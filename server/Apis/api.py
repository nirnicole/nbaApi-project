import requests


class Api:
    
    def __init__(self):
        self.url = ""
        self.headers = {}
        self.resources = None
        self.raw_data = None

    def make_call(self):
        final_url = self.url + self.resources

        if self.method == "GET": 
            response = requests.get(final_url, self.headers)
        elif self.method == "POST":
            pass
        elif self.method == "PUT":
            pass
        elif self.method == "PATCH":
            pass
        elif self.method == "DELETE":
            pass
        try:
            self.raw_data = response.json()
        except Exception as ex:
            template = "An exception of type {0} occurred. Arguments:\n{1!r}"
            message = template.format(type(ex).__name__, ex.args)
            print(message)
            self.raw_data = response.text
        return self

    def proccess_data(self):
        pass