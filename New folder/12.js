const signBtn = document.querySelector(".sign-btn");
const loginBox = document.querySelector(".login-box");

signBtn.addEventListener("click", function(){
    loginBox.style.display = "flex";
});

loginBox.addEventListener("click", function(){
    loginBox.style.display = "none";
});

setTimeout(() => {
    loginBox.style.display = "flex";
}, 5000);