const btn = document.getElementById("btn") as HTMLButtonElement;
const formName = document.querySelector("#name") as HTMLInputElement;
const formEmail = document.querySelector("#email") as HTMLInputElement;
const formMessage = document.querySelector("#message") as HTMLInputElement;
const form = document.querySelector("form") as HTMLFormElement;

let store: (number | string)[] = [];
form.addEventListener("input", () => {
  if (!form.checkValidity()) {
    console.log(form.checkValidity());
    btn.classList.remove("disabled");
  } else {
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
    store.push(
      `name is ${fname} and email is ${femail} with message ${fmessage}`
    );
    console.log(store);
    console.log();
  }
});

const yourImage = document.querySelectorAll(
  "#your-image-id"
) as NodeListOf<Element>;
const displayFrame = document.querySelector(
  "#display-frame"
) as HTMLIFrameElement;
const displayImg = document.querySelector("#display-img") as HTMLImageElement;

const clickOnImg = {
  this: HTMLElement,
};

for (let i = 0; i < yourImage.length; i++) {
  yourImage[i]?.addEventListener("click", function (this: HTMLImageElement, e) {
    e.preventDefault();
    console.log(this);
    displayImg!.src = this.src;
    displayFrame!.style.display = "flex";
  });
}
displayFrame?.addEventListener("click", function () {
  this.style.display = "none";
});
