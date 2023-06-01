function register(ev) {
  const sectionElement = ev.currentTarget.parentNode;

  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário: " + username + ", cadastrado!");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordConfirmation").value = "";
    console.log(ev);
  } else {
    alert("As senhas não conferem, tente novamente!");

    document.getElementById("password").value = "";
    document.getElementById("passwordConfirmation").value = "";
  }
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);
