function pegarDados() {
  document.querySelector(".esconder").style.display = "block";

  let cText = document.getElementById("texto").value;
  document.getElementById("cText").innerHTML = "Texto: " + cText;
  let cFone = document.getElementById("fone").value;
  document.getElementById("cFone").innerHTML = "Telefone: " + cFone;
  let cEmail = document.getElementById("email").value;
  document.getElementById("cEmail").innerHTML = "E-mail: " + cEmail;
  let cSenha = document.getElementById("senha").value;
  document.getElementById("cSenha").innerHTML = "Senha: " + cSenha;

  let cCheckInfo = document.getElementById("info");
  let cCheckAdm = document.getElementById("adm");
  let cCheckEnf = document.getElementById("enf");
  
  if (cCheckInfo.checked) {
    document.getElementById("cCheckInfo").innerHTML = "Campo CheckBox: Informática";
  }
  if (cCheckAdm.checked) {
    document.getElementById("cCheckAdm").innerHTML = "Campo CheckBox: Administração";
  }
  if (cCheckEnf.checked) {
    document.getElementById("cCheckEnf").innerHTML = "Campo CheckBox: Enfermagem";
  }

  if (document.getElementById("info2").checked) {
    document.getElementById("cCheckCur").innerHTML = "Campo Radio: Informática";
  } else if (document.getElementById("adm2").checked) {
    document.getElementById("cCheckCur").innerHTML = "Campo Radio: Administração";
  } else if (document.getElementById("enf2").checked) {
    document.getElementById("cCheckCur").innerHTML = "Campo Radio: Enfermagem";
  }

  let cOcult = document.getElementById("oculto").value;
  document.getElementById("cOcult").innerHTML = "Valor Oculto: " + cOcult;
  let cNum = document.getElementById("num").value;
  document.getElementById("cNum").innerHTML = "Número: " + cNum;
  let cData = document.getElementById("data").value;
  document.getElementById("cData").innerHTML = "Data: " + cData;
  let cHora = document.getElementById("hora").value;
  document.getElementById("cHora").innerHTML = "Hora: " + cHora;
  let cRange = document.getElementById("range").value;
  document.getElementById("cRange").innerHTML = "Valor Range: " + cRange;
  let cSel = document.getElementById("PriFaixa").value;
  document.getElementById("cSel").innerHTML = "Valor da Faixa: " + cSel;
}