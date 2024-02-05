let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) =>  {
    button.addEventListener("click", (e) => {
        display.inner.Text = e.target.innerText
    })
})
