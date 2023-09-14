const n1=0.3, n2=0.3, nf=0.4, promedio=3.2;
let parcial_1=0, parcial_2=0, final_n=0;
function calcular_notas(){
    parcial_1=parseFloat(document.getElementById("Input_parcial_1").value);
    parcial_2=parseFloat(document.getElementById("Input_parcial_2").value);
    final_n=parseFloat(document.getElementById("Input_final").value);
    let resultado= Math.round(((parcial_1*n1)+(parcial_2*n2)+(final_n*nf))*10)/10;
    let element_mod = document.querySelector(".col-5 > span");
    if (resultado>=promedio){
        element_mod.style.color="green";
        element_mod.innerHTML = "Nota: "+resultado+"<br>"+"Estado: APROBADO";
    }
    else {
        element_mod.style.color="red";
        element_mod.innerHTML = "Nota: "+resultado+"<br>"+"Estado: REPROVADO";
    }
    calculador_n.reset();
}