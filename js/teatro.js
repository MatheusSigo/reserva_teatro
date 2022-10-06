//obter os elementos da pagina
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

//connstante para definir o numero de poltronas
const POLTRONAS = 240;

//vetor com as poltronas reservadas pelo cliente
const reservadas=[];

window.addEventListener("load",()=>{
    //se houver dados salvos em localstorage, faz um split(;)
    //e atribui esses dados ao array, caso contrario, inicializamos o array
    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    //montar o numero total de poltronas (defindas pela constante)
    for(let i=1; i<= POLTRONAS; i++){
        const figure = document.createElement("figure");//cria a tag figure
        const imgStatus = document.createElement("img");//cria atag img


        //se a posicao estiver ocupada, exibe a a imagem ocupada, senao, a imagem disponivel
        imgStatus.src = ocupadas.split(";")
    }
})