"use strict";
var _a;
const btn = document.getElementById("btn");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMessage = document.querySelector("#message");
const form = document.querySelector("form");
let store = [];
form.addEventListener("input", () => {
    if (!form.checkValidity()) {
        console.log(form.checkValidity());
        btn.classList.remove("disabled");
    }
    else {
        btn.classList.add("disabled");
        console.log("hiii");
    }
});
form.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target === form) {
        const fname = formName.value;
        const femail = formEmail.value;
        const fmessage = formMessage.value;
        store.push(`name is ${fname} and email is ${femail} with message ${fmessage}`);
        console.log(store);
        console.log();
    }
});
const yourImage = document.querySelectorAll("#your-image-id");
const displayFrame = document.querySelector("#display-frame");
const displayImg = document.querySelector("#display-img");
const clickOnImg = {
    this: HTMLElement,
};
for (let i = 0; i < yourImage.length; i++) {
    (_a = yourImage[i]) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(this);
        displayImg.src = this.src;
        displayFrame.style.display = "flex";
    });
}
displayFrame === null || displayFrame === void 0 ? void 0 : displayFrame.addEventListener("click", function () {
    this.style.display = "none";
});
