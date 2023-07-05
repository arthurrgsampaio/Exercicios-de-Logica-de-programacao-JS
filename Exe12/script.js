const btnTecnology = document.getElementById("btnTecnology");
let counter = 0;

btnTecnology.addEventListener("click", function (ev) {
  ev.preventDefault;
  const tecnologies = document.getElementById("tecnologies");

  tecnologies.append(document.createElement("br"));

  // Nome da Tecnologia
  const tecLabel = document.createElement("label");
  tecLabel.for = "tecName";
  tecLabel.innerText = "Tecnologia: ";
  const tecInput = document.createElement("input");
  tecInput.type = "text";
  tecInput.name = "tecName";
  tecInput.id = "tecName";
  tecnologies.append(tecLabel, tecInput);

  // Tempo de experiência na tecnologia
  const expLabel = document.createElement("label");
  expLabel.for = "tecExp";
  expLabel.innerText = "Experiência: ";
  tecnologies.appendChild(document.createElement("br"));
  tecnologies.appendChild(expLabel);

  //Opções do radio de experiência
  const expInput1 = document.createElement("input");
  expInput1.type = "radio";
  expInput1.name = "tecExp";
  expInput1.id = "expInput1";
  expInput1.value = "0/3";
  const expLabel1 = document.createElement("label");
  expLabel1.for = "tecExp1";
  expLabel1.innerText = "0-3 Anos";

  const expInput2 = document.createElement("input");
  expInput2.type = "radio";
  expInput2.name = "tecExp";
  expInput2.id = "expInput2";
  expInput2.value = "3/5";
  const expLabel2 = document.createElement("label");
  expLabel2.for = "tecExp2";
  expLabel2.innerText = "3-5 Anos";

  const expInput3 = document.createElement("input");
  expInput3.type = "radio";
  expInput3.name = "tecExp";
  expInput3.id = "expInput3";
  expInput3.value = "5+";
  const expLabel3 = document.createElement("label");
  expLabel3.for = "tecExp3";
  expLabel3.innerText = "5+ Anos";
  tecnologies.append(
    expInput1,
    expLabel1,
    expInput2,
    expLabel2,
    expInput3,
    expLabel3
  );
  tecnologies.appendChild(document.createElement("br"));

  //Botão para salvar Tecnologia atual
  const confirm = document.createElement("button");
  confirm.innerText = "Confirmar tecnologia";
  confirm.type = "submit";
  tecnologies.appendChild(confirm);

  let tec = [];

  confirm.addEventListener("submit", function (ev) {
    ev.preventDefault;
    const nameVal = document.getElementById("tecName").value;
    const expVal = document.querySelector("input[name = 'tecExp']").value;
    const arraySection = document.getElementById("arraySection");

    const alertConfirm = confirm(
      "Deseja salvar as informações de " +
        nameVal +
        " - " +
        expVal +
        " anos de experiência?"
    );

    if (alertConfirm) {
      tec = [
        {
          tecnologia: nameVal,
          experiência: expVal,
        },
      ];

      const ul = document.createElement("ul");

      const liTecName = document.createElement("li");
      liTecName.innerText = nameVal;
      const liTecExp = document.createElement("li");
      liTecExp.innerText = expVal;
      ul.append(liTecName, liTecExp);
      arraySection.appendChild(ul);
    }
  });
});
