window.onload = function () {
    let button = document.getElementById("button")
    button.addEventListener("click", function () {
        let emailInput = document.getElementById("email")
        let rightEmail = document.getElementById("rightEmail")
        if (emailInput.value.includes("@")) {
            rightEmail.className = "valid"
            rightEmail.innerText = "Looks good!"
        } else {
            rightEmail.className = "invalid"
            rightEmail.innerText = "Please provide valid email."
        }
        let passwordInput = document.getElementById("password")
        let rightPassword = document.getElementById("rightPassword")
        if (passwordInput.value.length >= 8 && passwordInput.value.match(/[A-Z]{1,}/g)) {
            rightPassword.className = "valid"
            rightPassword.innerText = "Looks good!"
        } else {
            rightPassword.className = "invalid"
            rightPassword.innerText = "Please provide valid password."
        }
    })
}