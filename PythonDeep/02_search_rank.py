# pip install requests
import requests
print(requests)


# 클라이언트 -> 요청 -> 검색어 순위 !
# 서버 -> 응답 -> 순위 데이터 
# requests.get(url) : GET 요청을 보내는 함수 -> requests.response 리턴 
url = "http://www.naver.com"
response = requests.get(url)
response.text # text -> 응답 데이터, url의 전체 html 코드 반환
response.content # content -> 응답 데이터 ( byte라서 이미지 등도 가능 )
response.encoding # response 객체의 인코딩 타입 반환
response.headers # 헤더 값
response.json # Json Response일 경우 dictionary 형태로 파싱
response.links # 헤더 링크
response.ok # 정상정인 응답인지
response.status_code # 상태코드, 성공 시 상태 코드 = 200
response.url # url 

