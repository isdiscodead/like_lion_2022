document.getElementById("lion").style.color = "blue";
document.getElementsByClassName("animal")[1].style.color = "red";
const animals = document.getElementByTagName("li");
document.querySelectorAll(".animal");
// querySelector -> 마찬가지로 1개만 선택
document.querySelector("#lion");

// .innerHTML → 태그 안의 내용 변경 ( HTML 요소 추가도 가능 )
animals.innerHTML += "<li class='animal'>cat</li>";


document.querySelectorAll(".box")[0].classList.add("purple");
document.querySelectorAll(".box")[0].classList.remove("purple");
document.querySelectorAll(".box")[0].classList.toggle("yellow"); // 추가 상태에서는 삭제

var num =0;
    document.getElementById("plus").addEventListener("click", function() { 
        num++;
        document.getElementById("num").innerHTML = num;
    });

    document.getElementById("minus").addEventListener("click", function() { 
        num--;
        document.getElementById("num").innerHTML = num;
    });