document.getElementById("c-2").style.display = "none";

let sub;
function myfun(v, btn) {
    sub = v;    
    const rating = document.querySelectorAll(".li");
    rating.forEach(elm => {
        elm.classList.remove("active");
    });
    btn.classList.add("active");
}

function submitFun() {
    document.getElementById("c-1").style.display = "none";
    document.getElementById("con-2").innerHTML = sub + " ";
    document.getElementById("c-2").style.display = "block";
    
}