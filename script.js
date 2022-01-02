window.onload = function () {
    addEventListener("click", function () {
        let d = document.getElementById("email")
        if (d.innerHTML.length > 3) document.getElementById("rightEmail").innerText = "nice"
    })
}