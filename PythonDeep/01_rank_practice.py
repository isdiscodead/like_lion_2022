# pip install requests
import requests
# print(requests) # 모듈 주소 위치 출력됨 


# 클라이언트 -> 요청 -> 검색어 순위 !
# 서버 -> 응답 -> 순위 데이터 
# requests.get(url) : GET 요청을 보내는 함수 -> requests.response 리턴 
url = "https://daum.net"
response = requests.get(url)
response.text # text -> 응답 데이터, url의 전체 html 코드를 str로 반환
response.content # content -> 응답 데이터 ( byte라서 이미지 등도 가능 )
response.encoding # response 객체의 인코딩 타입 반환
response.headers # 헤더 값
response.json # Json Response일 경우 dictionary 형태로 파싱
response.links # 헤더 링크
response.ok # 정상정인 응답인지
response.status_code # 상태코드, 성공 시 상태 코드 = 200
response.url # url 


# Beautiful Soup -> 가져온 데이터를 의미있게 바꾸는 것을 도와주는 모듈 
# pip install bs4
from bs4 import BeautifulSoup 

# BeautifulSoup(데이터, 파싱 방법) -> 데이터를 정리해서 묶어줌 
# parsing -> 의미 있는 단위로 분해, 묶어주는 것 
# html.parser -> 파이썬 내장 parser
soup = BeautifulSoup(response.text, 'html.parser') # response.text와 동일해보이지만 BeautifulSoup 객체 형태

soup.title # title 태그 
soup.title.string  # 내용물만 ... 
soup.span # 가장 처음에 나오는 span 태그
soup.findAll('span') # 모든 span 태그 


# 파일을 여는 것, write 용도 ...
file = open("daum.html", "w") # open(파일 이름, 모드->write, read, append)
file.write(response.text)
file.close()

# 파일을 통해 둘러보면, 실시간 검색어는 a태그에, class가 "link_favorsch @num" 형태임 
results = soup.findAll('a', "link_favorsch") # link_favorsch 클래스를 가진 a태그 전체 리스트로 반환


# 날짜 설정을 위한 모듈
from datetime import datetime
date_info = datetime.today().strftime("%Y년 %m월 %d일의 일일 검색어 순위입니다.\n")
print(date_info)

# 파일로 작성 
search_rank_file = open("rankresult.txt", "a")
search_rank_file.write(date_info)

rank = 1
for result in results :
    search_rank_file.write(str(rank)+"위:"+result.get_text()+"\n")
    print(rank, "위 : ", result.get_text(), '\n')
    rank += 1