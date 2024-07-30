let form = document.querySelector('form');
let emailValue = document.querySelector("#email");
let input = document.querySelector("input");
let error = document.querySelector("label p");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailValidator()
})

function emailValidator() {
  if (
    !emailValue.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    error.style.display = "block";
    input.style.border = "1px solid var(--Light-Red)";
  } else {
    form.submit();
  }
}
