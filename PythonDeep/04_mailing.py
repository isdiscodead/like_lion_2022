# SMTP 사용을 위한 내장 라이브러리
import smtplib
from tkinter import image_types

# 사용할 주소와 포트 지정
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465 # gmail의 SMTP 포트 

# SMTP 서버에 연결, 정보 반환 
# smtp = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)

# gmail의 smtp는 SSL 요구 -> SMTP()로 사용하면 보안 상 문제로 막힘 
smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
print(smtp)


# 이미지 파일 → binary 파일로 변환 ... 
# image = open("codelion.png", "rb") # read binary mode 
# print(image.read())

# close() 없이 안전하게 파일 열고 닫기 
with open("codelion.png", "rb") as image :
    image_file = image.read()


import imghdr # 확장자 판별 모듈
image_type = imghdr.what('codelion', image_file)


# MIME 형식으로 바꾸기 위한 email message -> SMTP 서버에서 텍스트 사용 가능 ㄴ
from email.message import EmailMessage
message = EmailMessage()

message.set_content("코드라이언 수업 중입니다.") # 본문 내용 


# multipart/mixed 타입의 메일 -> add_attachment(image, maintype, subtype확장자)
message.add_attachment(image_file, maintype="image", subtype=image_type)



# MIME에는 header가 존재 -> 제목, 수신/발신인 정보 등이 담김
message["Subject"] = "이것은 제목입니다."
message["From"] = "###@gmail.com"
message["To"] = "$$$@gmail.com"


# smtp 서버에 로그인 -> 본인 계정 정보 입력
smtp.login("###@gmail.com", "PASSWORD") 
smtp.send_message(message) # MIME 형태의 메시지 전송
smtp.quit() # 서버 닫기 
