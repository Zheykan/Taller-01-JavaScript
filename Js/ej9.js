let nota=null;
function calcular_estado(){
    nota=parseFloat(document.getElementById("Input_nota").value);
    let element_mod = document.querySelector("#estado > span");
    if (nota>=0 && nota<=5){
        if (nota<3){
            element_mod.style.color="#840606";
            element_mod.innerHTML ="DEFICIENTE - DEBE APLICAR A PLAN DE NIVELACION";
        }
        else if(nota>=3 && nota<4){
            element_mod.style.color="#cc8b00";
            element_mod.innerHTML ="REGULAR - DEBE APLICAR A PLAN DE REFUERZO";
        }
        else if(nota>=4 && nota<5){
            element_mod.style.color="#00cc00";
            element_mod.innerHTML ="BUENO - PUEDE MEJORAR SI SE LO PROPONE";
        }
        else{
            element_mod.style.color="#1a8cff";
            element_mod.innerHTML ="EXCELENTE - ¡FELICITACIONES SIGUE ASI!";
        }
    }
    else{
        alert("¡La nota debe estar entre 0 y 5! \n Rectifica el valor.");
        consultor.reset();
        element_mod.innerHTML ="";
    }
    consultor.reset();
};

