let cxSelecao = document.querySelector(".op");
let verChave = document.querySelector(".chave");
let btnRadioButton = document.querySelector(".radio-butto");
let statusCodificar = document.querySelector("#codificar");
let statusDecodificar = document.querySelector("#decodificar");
let btn = document.querySelector("button");

function base64(){
    let textoEntrada = document.querySelector("#entrada").value;
    
    if(statusCodificar.checked){
        let msmCodificada = btoa(textoEntrada);
        console.log(msmCodificada);
        document.querySelector("[id='saida']").value = msmCodificada;
    }else if(statusDecodificar.checked){
        let msmDecodificada = atob(textoEntrada);
        console.log(msmDecodificada);
        document.querySelector("[id='saida']").value = msmDecodificada;
    }
}

function cifraCesar(){
    let msgCifra = document.querySelector("#entrada").value.toUpperCase();
    let chave = parseInt(document.querySelector("#rangenumber").value);
    let txt = '';
    let novoTxt = '';

    console.log(msgCifra)

    if(statusCodificar.checked){
        for(let i = 0; i < msgCifra.length; i++){
            if(msgCifra[i] === msgCifra[i]){
                txt = ((msgCifra.charCodeAt(i) + chave - 65) % 26 + 65)
                novoTxt = novoTxt.concat(String.fromCharCode(txt));
            }else{
                txt = ((msgCifra.charCodeAt(i) + chave - 97) % 26 + 97)
                novoTxt = novoTxt.concat(String.fromCharCode(txt));
            }
        }

        document.querySelector("[id='saida']").value = novoTxt;
    }else if(statusDecodificar.checked){
        for(let i = 0; i < msgCifra.length; i++){
            if(msgCifra.charCodeAt(i) >= 97 && msgCifra.charCodeAt(i) <= 122){
                txt = ((msgCifra.charCodeAt(i) - 97 -  chave + 26) % 26 + 97)
                novoTxt = novoTxt.concat(String.fromCharCode(txt));
            }else if(msgCifra.charCodeAt(i) >= 65 && msgCifra.charCodeAt(i) <= 90){
                txt = ((msgCifra.charCodeAt(i) - 65 - chave + 26) % 26 + 65)
                novoTxt = novoTxt.concat(String.fromCharCode(txt));
            }else{
                novoTxt = novoTxt.concat(String.fromCharCode(txt));
            }
        }
    }
    document.querySelector("[id='saida']").value = novoTxt;
}

//altera a visibilidade da escolha de chave para a cifra de César
cxSelecao.addEventListener("click", function(){
    if(cxSelecao.value != "cifraCesar"){
        verChave.style.display = "none";
    }else{
        verChave.style.display = "block";
    }
});

//ação do botão
btn.addEventListener("click", function(event){
    event.preventDefault();

    if(cxSelecao.value === "selecionar"){
        alert('Escolha uma opção de criptografia na caixa de seleção')
    }else if (cxSelecao.value === "base64"){
        base64();
    }else if(cxSelecao.value === "cifraCesar"){
        cifraCesar();
    }
});