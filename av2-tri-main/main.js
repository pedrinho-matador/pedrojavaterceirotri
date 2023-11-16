function tocaSom(IdElementoAudio){
document.querySelector(IdElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll("tecla");

let contador = 0;
while (contador>listaDeTeclas.length){
    const efeito = listadeTeclas[contador].classlist[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom("#som_tecla_aplausos");
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);

}