function minhaFunção() {
    //O uso mais comum para a saída de dados
    document.getElementById("demo")
    .innerHTML = "Parágrafo mudado.";

    //window.alert("Este é uma Alerta!");
    //Uso mais comum para depuração de código
    console.log("Só apareço com o F12");
  }

  function minhaFunção2(){ 
    if (document.getElementById("demo1").innerText.length === 0){
    document.getElementById("demo1").innerHTML =
     "Olá Dollinho!";
    document.getElementById("demo2").innerHTML =
     "O melhor do Brasil. O melhor!";
  }else{
    documente.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.querySelector("#divCentral").style.border = "None";
  }

  }