
var num = 0
document.getElementById("plus").addEventListener("click", function() {
    num++;
    document.getElementById("num").innerHTML = num;
});
document.getElementById("minus").addEventListener("click", function() {
    num--;
    document.getElementById("num").innerHTML = num;
});


document.getElementsByClassName("bar")[0].addEventListener("click", function() {
    document.getElementsByClassName("bar")[0].innerHTML= "눌렀어!";
    document.getElementsByClassName("newBar")[0].classList.toggle("show");
});

document.querySelectorAll(".list")[0].addEventListener("click", function (e) { tabBtn(e.target.dataset.id); });

function tabBtn(a) {
    document.querySelectorAll('.tab-button')[a].addEventListener("click", function() {
        for ( let i=0 ; i < document.getElementsByClassName("tab-button").length ; i++ ) {
            document.querySelectorAll('.tab-button')[i].classList.remove("here");
            document.querySelectorAll('.tab-button')[i].classList.remove("show");
        }
        document.querySelectorAll('.tab-button')[a].classList.add("here");
        document.querySelectorAll('.tab-content')[a].classList.add("show");
    });
}