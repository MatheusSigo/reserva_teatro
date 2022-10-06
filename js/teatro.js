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
    :[];
    //montar o numero total de poltronas (defindas pela constante)
    for(let i=1; i<= POLTRONAS; i++){
        const figure = document.createElement("figure");//cria a tag figure
        const imgStatus = document.createElement("img");//cria atag img


        //se a posicao estiver ocupada, exibe a a imagem ocupada, senao, a imagem disponivel
        imgStatus.src = ocupadas.includes(i.toString())
        ? "img/ocupada.jpg"
        : "img/disponivel.jpg";
        imgStatus.className = "poltrona";//classe com dimensao da imagem
        const figureCap = document.createElement("figcaption");//cria figcaption
        //quantidade de zeros antes do numero da poltrona
        const zeros = i< 10?"00":i<100?"0":"";
        const num = document.createTextNode(`[${zeros}${i}]`);//cria o texto
        //define os pais de cada tag criada
        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);
        //se i modulo de 24 == 12 (é o corredor:defiie margem direita 60px)
        if(i%24==12)figure.style.marginRight="60px"
        dvPalco.appendChild(figure);//indica que a figura é filha da divPalco
        //se i modulo 24==0: o codigo apos o && sera executado(inserindo quebra de linha)
        (i%24==0)&&dvPalco.appendChild(document.createElement("br"));
    }
})