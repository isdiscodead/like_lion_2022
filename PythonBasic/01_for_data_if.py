for x in range(30):
    print(x)


foods = ["된장찌개", "피자", "제육볶음", "된장찌개"]

for x in range(3):
    print(foods[x])

# 리스트의 개수에 상관 없이 접근 가능하도록
for x in foods:
    print(x)


information = {'고향':'수원', '취미':'영화 관람', '좋아하는 음식':'국수'}

# Dictionary 순차 접근 시 .items() 사용
for x, y in information.items():
    print(x, ":", y)


# 집합 -> 리스트와 달리 순서 X, 중복 비허용 
foods_set = set(foods)
foods_set2 = set(["떡국", "김밥", "제육볶음", "된장찌개"])
print(foods_set, foods)

menu = foods_set | foods_set2 # 합집합 
print("합집합 : ", menu)

menu = foods_set & foods_set2 # 교집합 
print("교집합 : ", menu)

menu = foods_set - foods_set2 # 차집합 
print("차집합 : ", menu)