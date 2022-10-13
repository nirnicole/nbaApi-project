from server.Apis.nbaApi import NbaApi 

res = NbaApi("2019", "heat")
print(res) 
print(" batel at koletet?")

def test_passing():
    assert 42 == 42
def test_failure():
    assert 42 == -13

def test_failure2():
    res = NbaApi("2019", "heat")
    print(res)
    assert type(res) == NbaApi


