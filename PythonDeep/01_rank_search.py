from bs4 import BeautifulSoup 
import time
# pip install selenium
from selenium import webdriver
from selenium.webdriver.common.by import By

# https://sites.google.com/chromium.org/driver/
# 버전에 맞는 driver 다운로드 

driver = webdriver.Chrome(executable_path=r'/Users/isdiscodead/Documents/LikeLion/2022/PythonDeep/chromedriver')
driver.get('https://signal.bz/')

results = driver.find_elements(By.CLASS_NAME, "rank-text")
print(results)


# 날짜 설정을 위한 모듈
from datetime import datetime
date_info = datetime.today().strftime("%Y년 %m월 %d일의 일일 검색어 순위입니다.\n")
print(date_info)


# 파일로 작성 
search_rank_file = open("rankresult.txt", "a")
search_rank_file.write(date_info)


rank = 1
for result in results :
    print(rank, "위 : ", result.text, '\n')
    search_rank_file.write(str(rank)+"위:"+result.text+"\n")
    rank += 1