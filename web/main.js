const btn = document.getElementById("btn");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const body = document.getElementById("body");
const btn2 = document.getElementById("btn2");

btn.addEventListener("click", function () {
    text.innerHTML = "muh iky haq";
    text.style.color = "white";
    btn.style.display = "none";
    btn2.style.display = "none";
    body.style.backgroundColor = "black";

    setTimeout(() => {
        btn.style.display = "block";
        btn2.style.display = "block";
        text.style.display = "none";
        body.style.backgroundColor = "white";
    }, 3000);

});

btn2.addEventListener("click", function () {
    text2.innerHTML = "kembali";
    text2.style.color = "red";
    text.style.color = "none";
    btn.style.display = "none";

});