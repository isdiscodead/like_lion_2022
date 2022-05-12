# pip install googletrans
# googletrans -> 언어 감지 및 번역 라이브러리
from googletrans import Translator

# 현재 버전 변경으로 기존 모듈 사용 불가능 ...
# pip uninstall googletrans
# pip install googletrans==4.0.0-rc1

# 번역기 생성 
translator = Translator()


# 언어 감지
sentence = "안녕 꽁치"
# sentence = input("언어를 감지할 문장을 입력해주세요 : ")
detected = translator.detect(sentence)
print(detected)


# 문장 번역
# tramslate(text, destination, source)
result_en = translator.translate(sentence, 'en') # source 생략 시 자동으로 detect 
result_ar = translator.translate(sentence, 'ar') # 아랍어
result_de = translator.translate(sentence, 'de') # 독일어
result_vi = translator.translate(sentence, 'vi') # 베트남어
result_zh_CN = translator.translate(sentence, 'zh-CN') # 중국어
result_mn = translator.translate(sentence, 'mn') # 몽골어
result_es = translator.translate(sentence, 'es') # 스페인어
result_hi = translator.translate(sentence, 'hi') # 힌디어


# 결과 출력
print("====== 출력 결과 ======")
print(detected.lang, ":", sentence)
print(result_en.dest, ":", result_en.text)
print(result_ar.dest, ":", result_ar.text)
print(result_de.dest, ":", result_de.text)
print(result_vi.dest, ":", result_vi.text)
print(result_zh_CN.dest, ":", result_zh_CN.text)
print(result_mn.dest, ":", result_mn.text)
print(result_es.dest, ":", result_es.text)
print(result_hi.dest, ":", result_hi.text)
print("============")