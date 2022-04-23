for x in range(30):
    print(x)

foods = ["된장찌개", "피자", "제육볶음"]

for x in range(3):
    print(foods[x])

# 리스트의 개수에 상관 없이 접근 가능하도록
for x in foods:
    print(x)


information = {'고향':'수원', '취미':'영화 관람', '좋아하는 음식':'국수'}

# Dictionary 순차 접근 시 .items() 사용
for x, y in information.items():
    print(x, ":", y)