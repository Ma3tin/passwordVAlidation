window.onload = function () {
    let button = document.getElementById("button")
    button.addEventListener("click", function () {
        let emailInput = document.getElementById("email")
        if (emailInput.value.length > 3) document.getElementById("rightEmail").innerText = "nice"
    })
}