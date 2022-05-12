import requests 

# call할 api 주소를 만들 때는 필요한 정보들이 있음 ! 
api = "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"

city = "Seoul"
apikey = "###"

# optional한 파라미터를 추가해서 사용 가능 
lang = "kr"
unit = "metric" # 온도 단위 Celcious

# f-string 사용해 주소 수정 
# ? 기준으로 앞 쪽은 공통 url, 뒤는 parameter ! 
api = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}&lang={lang}&units={unit}"

result = requests.get(api)
print(result.text)


# JSON : Java Script Object Notation, 객체를 표현하기 위한 데이터 포맷
# dictionary와 비슷한 모양으로 생겼음 ! 
import json
data = json.loads(result.text) # str을 json으로 loading 
# print(data)

print(data["name"],"의 날씨입니다.")
print("현재 날씨는", data["weather"][0]["description"])
print("현재 온도는", data["main"]["temp"], "입니다")
print("체감 온도는", data["main"]["feels_like"], "입니다")

# 최저 기온 main - temp_min
print("최저 기온:", data["main"]["temp_min"])

# 최고 기온 : main - temp_max
print("최고 기온:", data["main"]["temp_max"])

# 습도 : main - humidity
print("습도:", data["main"]["humidity"])

# 기압 : main - pressure
print("기압:", data["main"]["pressure"])

# 풍향 : wind - deg
print("풍향:", data["wind"]["deg"])

# 풍속 : wind - speed
print("풍속:", data["wind"]["speed"])